import { ArrowUpRight } from 'lucide-react'

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-bottom">
        <p>ChunYin Shang · Hangzhou ↔ Hong Kong</p>
        <a href="mailto:khelilshang78@gmail.com">
          khelilshang78@gmail.com <ArrowUpRight aria-hidden="true" size={18} />
        </a>
      </div>
    </footer>
  )
}
