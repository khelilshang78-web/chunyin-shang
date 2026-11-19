import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Writing from './pages/Writing'
import EssayPage from './pages/EssayPage'
import NotFound from './pages/NotFound'

export default function App() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        target.scrollIntoView({ behavior: 'instant', block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/writing" element={<Writing />} />
      <Route path="/writing/:slug" element={<EssayPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
