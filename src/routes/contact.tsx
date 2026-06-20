import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6 flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold lowercase text-gray-900 mb-6">contact</h1>
        <a
          href="mailto:bethanyhible@gmail.com"
          className="text-sm md:text-base text-gray-500 hover:text-gray-900 transition-colors tracking-wide"
        >
          bethanyhible@gmail.com
        </a>
      </div>
    </div>
  )
}
