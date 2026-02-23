import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { fbqTrack } from './metaPixel'

let lastKey = null
let lastTs = 0

export default function MetaPixelTracker() {
  const { pathname, search } = useLocation()

  useEffect(() => {
    const key = pathname + search
    const now = Date.now()

    // Dedupe: mismo key en menos de 500 ms (StrictMode / dev double effect)
    if (key === lastKey && now - lastTs < 500) return

    lastKey = key
    lastTs = now

    if (import.meta.env.DEV) console.log('[MetaPixel] PageView →', key)
    fbqTrack('PageView')
  }, [pathname, search])

  return null
}
