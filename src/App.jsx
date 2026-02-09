import './App.css'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ReactLenis } from './components/ReactLenis'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Form from './form'
function App() {
    const lenisRef = useRef()

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }

    gsap.ticker.add(update)

    return () => gsap.ticker.remove(update)
  }, [])
  return (
    <>
    <ReactLenis
        root
        options={{ autoRaf: false }}
        ref={lenisRef}
      />
      <Router>
        <Header />
        <Routes>
          <Route
            path='/'
            element={<Form />}
          />
          {/* <Route
            path='/nosotros'
            element={<Nosotros />}
          />
          <Route
            path='/servicios'
            element={<Servicios />}
          /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
