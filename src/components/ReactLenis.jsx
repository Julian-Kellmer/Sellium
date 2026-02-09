import React, {
  useEffect,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react'
import Lenis from 'lenis'

export const ReactLenis = forwardRef(
  ({ children, root, options, className, ...props }, ref) => {
    const lenisInstanceRef = useRef(null)
    const wrapperRef = useRef(null)
    const contentRef = useRef(null)

    useImperativeHandle(ref, () => ({
      get lenis() {
        return lenisInstanceRef.current
      },
      // Expose DOM elements if needed
      wrapper: wrapperRef.current,
      content: contentRef.current,
    }))

    useEffect(() => {
      const lenis = new Lenis({
        ...options,
        // If root is false (default is often false in wrapper), we might need to specify wrapper/content
        // But if root prop is passed as true, Lenis defaults to window/html, which is what we want for global scroll.
        wrapper: !root ? wrapperRef.current : window,
        content: !root ? contentRef.current : document.documentElement, // or body
      })

      lenisInstanceRef.current = lenis

      // If autoRaf is enabled by default in options (unless overwritten), we can start it.
      // User passed autoRaf: false, so we don't start a loop here.

      return () => {
        lenis.destroy()
        lenisInstanceRef.current = null
      }
    }, [root, JSON.stringify(options)]) // JSON stringify to avoid deep dep check, simple workaround

    if (root) {
      return <>{children}</>
    }

    return (
      <div
        ref={wrapperRef}
        className={className}
        {...props}>
        <div ref={contentRef}>{children}</div>
      </div>
    )
  },
)

export default ReactLenis
