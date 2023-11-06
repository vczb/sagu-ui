import { renderHook } from '@testing-library/react-hooks'
import { fireEvent } from '../../utils/testUtils'
import useOnClickOutside from '.'
import { RefObject } from 'react'

describe('click-outside', () => {
  it('should test that the callback passed is called when the user clicks outside', () => {
    const callbackToBeCalled = jest.fn()
    const refObject = { current: document.head }
    renderHook(() => useOnClickOutside(refObject, callbackToBeCalled))

    expect(callbackToBeCalled).not.toHaveBeenCalled()

    fireEvent.mouseDown(document.body)

    expect(callbackToBeCalled).toHaveBeenCalled()
  })

  it('should test that the callback passed is not called when the user clicks inside', () => {
    const callbackToBeCalled = jest.fn()
    const refObject = { current: document.head }
    renderHook(() => useOnClickOutside(refObject, callbackToBeCalled))

    expect(callbackToBeCalled).not.toHaveBeenCalled()

    fireEvent.mouseDown(document.head)

    expect(callbackToBeCalled).not.toHaveBeenCalled()
  })

  it('should test that the callback passed is not called when ref object is undefined', () => {
    const callbackToBeCalled = jest.fn()
    const refObject = undefined as unknown as RefObject<HTMLElement>
    renderHook(() => useOnClickOutside(refObject, callbackToBeCalled))

    expect(callbackToBeCalled).not.toHaveBeenCalled()

    fireEvent.mouseDown(document.head)

    expect(callbackToBeCalled).not.toHaveBeenCalled()
  })
})
