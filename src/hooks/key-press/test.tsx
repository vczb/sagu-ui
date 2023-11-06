import { renderHook } from '@testing-library/react-hooks'
import { fireEvent } from '../../utils/testUtils'
import useOnKeyPress from '.'

describe('key-press', () => {
  it('should test that when the key specified by the user is pressed, the callback function is invoked', () => {
    const callbackToBeCalled = jest.fn()
    renderHook(() => useOnKeyPress('Enter', callbackToBeCalled))

    expect(callbackToBeCalled).not.toHaveBeenCalled()

    fireEvent.keyUp(document.body, {
      key: 'Enter'
    })

    expect(callbackToBeCalled).toHaveBeenCalled()
  })

  it('should test that when the callback is not called when a different key is pressed by the user', () => {
    const callbackToBeCalled = jest.fn()
    renderHook(() => useOnKeyPress('Enter', callbackToBeCalled))

    fireEvent.keyUp(document.body, {
      key: 'Escape'
    })

    expect(callbackToBeCalled).not.toHaveBeenCalled()
  })
})
