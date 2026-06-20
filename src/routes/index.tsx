import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold lowercase tracking-tight text-gray-900" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
          bethany hible
        </h1>
        <p className="mt-4 text-base md:text-lg tracking-widest uppercase text-gray-400 font-light">
          visual merchandiser
        </p>
      </div>
    </div>
  )
}
