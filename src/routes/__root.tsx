import { HeadContent, Scripts, createRootRoute, Link } from '@tanstack/react-router'

import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'bethany hible' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Nav />
        {children}
        <Scripts />
      </body>
    </html>
  )
}

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center gap-10 py-5 bg-white/90 backdrop-blur-sm">
      <Link
        to="/"
        className="text-xs tracking-widest uppercase text-gray-500 hover:text-gray-900 transition-colors [&.active]:text-gray-900"
      >
        home
      </Link>
      <Link
        to="/about"
        className="text-xs tracking-widest uppercase text-gray-500 hover:text-gray-900 transition-colors [&.active]:text-gray-900"
      >
        about
      </Link>
      <Link
        to="/work"
        className="text-xs tracking-widest uppercase text-gray-500 hover:text-gray-900 transition-colors [&.active]:text-gray-900"
      >
        work
      </Link>
      <Link
        to="/contact"
        className="text-xs tracking-widest uppercase text-gray-500 hover:text-gray-900 transition-colors [&.active]:text-gray-900"
      >
        contact
      </Link>
    </nav>
  )
}
