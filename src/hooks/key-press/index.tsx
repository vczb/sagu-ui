import { useEffect } from 'react'

type Event = KeyboardEvent

export default function useOnKeypress(key: string, action: () => void) {
  useEffect(() => {
    function onKeyup(e: Event) {
      if (e.key === key) action()
    }
    window.addEventListener('keyup', onKeyup)
    return () => window.removeEventListener('keyup', onKeyup)
  }, [key, action])
}
