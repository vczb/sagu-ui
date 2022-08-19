import { useEffect } from 'react'

const useWindowOnNearBottom = (handler: () => void) => {
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight =
        'innerHeight' in window
          ? window.innerHeight
          : document.documentElement.offsetHeight
      const body = document.body
      const html = document.documentElement
      const docHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      )
      const windowBottom = windowHeight + window.pageYOffset
      if (windowBottom >= docHeight) {
        handler()
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [handler])
}

export default useWindowOnNearBottom
