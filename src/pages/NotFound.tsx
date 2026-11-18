import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'

export default function NotFound() {
  return (
    <main className="not-found">
      <p className="eyebrow">404 · Page not found</p>
      <h1>This page is not part of the argument.</h1>
      <p>The address may have changed, or the page may never have existed.</p>
      <Link to="/" className="text-link">Return to the homepage <ArrowUpRight aria-hidden="true" size={18} /></Link>
    </main>
  )
}
