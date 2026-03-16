import { ProjectCard } from './ProjectCard'

const projects = [
  {
    title: 'React Space',
    description:
      'Handy tool belt to create amazing AR components in a React app, with redux integration via middleware',
    image: '/images/project-react-space.jpg',
    href: '#',
  },
  {
    title: 'React Infinite Scroll',
    description:
      'A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land',
    image: '/images/project-infinite-scroll.jpg',
    href: '#',
    hasFireEmoji: true,
  },
  {
    title: 'Photo Gallery',
    description:
      'A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income',
    image: '/images/project-photo-gallery.jpg',
    href: '#',
  },
  {
    title: 'Event planner',
    description:
      'A mobile application for leisure seekers to discover unique events and activities in their city with a few taps',
    image: '/images/project-event-planner.jpg',
    href: '#',
  },
]

export function Projects() {
  return (
    <section id="projects" className="bg-[#3d8168] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[#f1f5f9] text-2xl font-bold mb-8">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              href={project.href}
              hasFireEmoji={project.hasFireEmoji}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
