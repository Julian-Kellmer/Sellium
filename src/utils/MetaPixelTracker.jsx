import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const PIXEL_ID = '695152750309053'
let lastPageViewKey = null

export default function MetaPixelTracker() {
  const { pathname, search } = useLocation()

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!window.fbq) return

    const pageKey = pathname + search
    if (pageKey === lastPageViewKey) return
    lastPageViewKey = pageKey

    window.fbq('set', 'autoConfig', 'false', PIXEL_ID)
    window.fbq('track', 'PageView')
  }, [pathname, search])

  return null
}
