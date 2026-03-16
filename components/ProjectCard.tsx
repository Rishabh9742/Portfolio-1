import { ArrowRight } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  href: string
  hasFireEmoji?: boolean
}

export function ProjectCard({
  title,
  description,
  image,
  href,
  hasFireEmoji,
}: ProjectCardProps) {
  return (
    <div className="bg-[#f1f5f9] rounded-lg overflow-hidden shadow-lg">
      <div className="h-48 w-full">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-[#1a2744] font-bold text-lg mb-2">{title}</h3>
        <p className="text-[#6b7280] text-sm mb-4 leading-relaxed">
          {description}
          {hasFireEmoji && ' \u{1F525}'}
        </p>
        <a
          href={href}
          className="inline-flex items-center text-[#1a2744] text-sm font-medium hover:underline"
        >
          See more
          <ArrowRight className="w-4 h-4 ml-1" />
        </a>
      </div>
    </div>
  )
}
