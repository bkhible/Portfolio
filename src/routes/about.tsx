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
              src="/images/about-photo2.jpg"
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
              Hi, I’m Beth! I’ve spent most of my career in retail visual merchandising, with 14 years at Target and 7 of those as a Visual Merchandiser. My background is in store presentation, seasonal transitions, signage, mannequin styling, and other hands-on visual work across the sales floor. I’ve always liked the mix of creativity and problem-solving that comes with merchandising, and this portfolio is a collection of some of the visual work I’ve done over the years.
            </p>
            <p>
              When I'm not styling spaces, I'm working on my <a href="https://www.etsy.com/shop/groundscorecharmco/">Etsy shop</a> where I sell small batch charm jewelry, and indulging in photography and travel.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
