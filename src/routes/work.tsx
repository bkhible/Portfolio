import { createFileRoute } from '@tanstack/react-router'
import { useCallback, useEffect, useState } from 'react'

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

type Project = { id: number; image: string; caption: string }

function Work() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold lowercase text-gray-900 mb-10">work</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <WorkItem key={project.id} project={project} onOpen={() => setActiveIndex(index)} />
          ))}
        </div>
      </div>
      {activeIndex !== null && (
        <Lightbox
          projects={projects}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      )}
    </div>
  )
}

function WorkItem({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <div>
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Enlarge photo: ${project.caption}`}
        className="block w-full aspect-[4/5] bg-gray-100 overflow-hidden mb-3 cursor-zoom-in group"
      >
        <img
          src={project.image}
          alt={project.caption}
          className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90"
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
      </button>
      <p className="text-xs text-gray-500 tracking-wide">{project.caption}</p>
    </div>
  )
}

function Lightbox({
  projects,
  index,
  onClose,
  onNavigate,
}: {
  projects: Project[]
  index: number
  onClose: () => void
  onNavigate: (index: number) => void
}) {
  const goPrev = useCallback(
    () => onNavigate((index - 1 + projects.length) % projects.length),
    [index, projects.length, onNavigate],
  )
  const goNext = useCallback(
    () => onNavigate((index + 1) % projects.length),
    [index, projects.length, onNavigate],
  )

  // Keyboard controls: Esc to close, arrows to navigate.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') goPrev()
      else if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', onKey)
    // Prevent the page behind the lightbox from scrolling.
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [onClose, goPrev, goNext])

  const project = projects[index]

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.caption}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-white/95 backdrop-blur-sm px-4 py-16 sm:px-16"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-5 right-5 text-xs tracking-widest uppercase text-gray-500 hover:text-gray-900 transition-colors"
      >
        close
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          goPrev()
        }}
        aria-label="Previous photo"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 text-gray-400 hover:text-gray-900 transition-colors"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <figure
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col items-center max-w-full max-h-full cursor-default"
      >
        <img
          src={project.image}
          alt={project.caption}
          className="max-h-[80vh] max-w-[85vw] w-auto h-auto object-contain"
        />
        <figcaption className="mt-4 text-xs text-gray-500 tracking-wide text-center">
          {project.caption}
        </figcaption>
      </figure>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          goNext()
        }}
        aria-label="Next photo"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 text-gray-400 hover:text-gray-900 transition-colors"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  )
}
