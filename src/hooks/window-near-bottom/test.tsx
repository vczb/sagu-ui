import { renderHook } from '@testing-library/react-hooks'
import { fireEvent } from '../../utils/testUtils'
import useWindowOnNearBottom from '.'

const setScrollHeight = (height: number) => {
  Object.defineProperty(document.body, 'scrollHeight', {
    configurable: true,
    value: height
  })
}

describe('window-near-bottom', () => {
  it('should test that the callback function is invoked when user scrolls to the bottom', () => {
    setScrollHeight(768)

    const callbackToBeCalled = jest.fn()
    renderHook(() => useWindowOnNearBottom(callbackToBeCalled))

    expect(callbackToBeCalled).not.toHaveBeenCalled()

    fireEvent.scroll(window)

    expect(callbackToBeCalled).toHaveBeenCalled()
  })

  it('should test that the callback function is not invoked if user if not near the bottom', () => {
    setScrollHeight(1000)

    const callbackToBeCalled = jest.fn()
    renderHook(() => useWindowOnNearBottom(callbackToBeCalled))

    expect(callbackToBeCalled).not.toHaveBeenCalled()

    fireEvent.scroll(window)

    expect(callbackToBeCalled).not.toHaveBeenCalled()
  })
})
