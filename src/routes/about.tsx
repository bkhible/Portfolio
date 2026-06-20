import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-start">
        {/* Portrait photo */}
        <div className="w-full md:w-72 shrink-0">
          <div className="w-full aspect-[3/4] bg-gray-100 overflow-hidden">
            <img
              src="/images/about-photo.jpg"
              alt="Bethany Hible"
              className="w-full h-full object-cover"
              onError={(e) => {
                const el = e.currentTarget
                el.style.display = 'none'
                const parent = el.parentElement
                if (parent) {
                  parent.style.display = 'flex'
                  parent.style.alignItems = 'center'
                  parent.style.justifyContent = 'center'
                  parent.innerHTML = '<span style="color:#ccc;font-size:0.75rem;text-align:center;padding:1rem">photo coming soon</span>'
                }
              }}
            />
          </div>
        </div>

        {/* Bio */}
        <div className="flex-1 pt-2">
          <h1 className="text-2xl font-bold lowercase text-gray-900 mb-6">about me</h1>
          <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
            <p>
              I'm Bethany Hible, a visual merchandiser with a passion for creating
              compelling retail experiences that tell a story and drive connection
              between brand and customer.
            </p>
            <p>
              With a keen eye for detail and a deep understanding of consumer behavior,
              I craft displays and environments that feel both intentional and inviting.
              Every project is an opportunity to blend aesthetics with strategy.
            </p>
            <p>
              When I'm not styling spaces, I'm drawing inspiration from architecture,
              fashion, and the world around me.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
