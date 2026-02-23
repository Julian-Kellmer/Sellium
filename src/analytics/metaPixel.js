/**
 * Meta Pixel helpers — guards against adblock / missing fbq.
 * Pixel ID lives ONLY in index.html (single source of truth).
 */

function hasFbq() {
  return typeof window !== 'undefined' && typeof window.fbq === 'function'
}

export function fbqTrack(eventName) {
  if (!hasFbq()) {
    if (import.meta.env.DEV)
      console.warn('[MetaPixel] fbq not available (adblock?)')
    return
  }
  if (import.meta.env.DEV) console.log(`[MetaPixel] track → ${eventName}`)
  window.fbq('track', eventName)
}

export function fbqTrackCustom(eventName, params = {}) {
  if (!hasFbq()) return
  if (import.meta.env.DEV)
    console.log(`[MetaPixel] trackCustom → ${eventName}`, params)
  window.fbq('trackCustom', eventName, params)
}
