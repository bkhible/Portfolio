import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/work')({
  component: Work,
})

const projects = [
  {
    id: 1,
    image: '/images/work-1.jpg',
    caption: 'Winter 2025 - Joylab, Brand Launch Gateway',
  },
  {
    id: 2,
    image: '/images/work-2.jpg',
    caption: 'Spring 2025 - Shade & Shore, Front of Store Wall Display',
  },
  {
    id: 3,
    image: '/images/work-3.jpg',
    caption: 'June 2025 - Universal Thread, Americana Moment',
  },
  {
    id: 4,
    image: '/images/work-4.jpg',
    caption: 'June 2025 - Ava & Viv, Americana Moment',
  },
  {
    id: 5,
    image: '/images/work-5.jpg',
    caption: 'Summer 2025 - Champion x Target, Brand Launch',
  },
  {
    id: 6,
    image: '/images/work-6.jpg',
    caption: 'Fall 2025 - Wild Fable, Back to College Gateway',
  },
  {
    id: 7,
    image: '/images/work-7.jpg',
    caption: 'Spring 2025 - Kate Spade x Target Collaboration',
  },
  {
    id: 8,
    image: '/images/work-8.jpg',
    caption: 'Fall 2021 - Ava & Viv; Knox Rose',
  },
  {
    id: 9,
    image: '/images/work-9.jpg',
    caption: 'Winter 2024 - Merry Cherry Chalet Gateway',
  },
  {
    id: 10,
    image: '/images/work-10.jpg',
    caption: 'Winter 2025 - Holiday Family Sleep',
  },
  {
    id: 11,
    image: '/images/work-11.jpg',
    caption: 'Spring 2025 - Hearth & Hand Spring Transition',
  },
  {
    id: 12,
    image: '/images/work-12.jpg',
    caption: 'Spring 2025 - Hearth & Hand Spring Transition',
  },
]

function Work() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold lowercase text-gray-900 mb-10">work</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <WorkItem key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}

function WorkItem({ project }: { project: { id: number; image: string; caption: string } }) {
  return (
    <div>
      <div className="w-full aspect-[4/5] bg-gray-100 overflow-hidden mb-3">
        <img
          src={project.image}
          alt={project.caption}
          className="w-full h-full object-cover"
          onError={(e) => {
            const el = e.currentTarget
            el.style.display = 'none'
            const parent = el.parentElement
            if (parent) {
              parent.style.display = 'flex'
              parent.style.alignItems = 'center'
              parent.style.justifyContent = 'center'
              parent.innerHTML = '<span style="color:#ccc;font-size:0.75rem">photo coming soon</span>'
            }
          }}
        />
      </div>
      <p className="text-xs text-gray-500 tracking-wide">{project.caption}</p>
    </div>
  )
}
