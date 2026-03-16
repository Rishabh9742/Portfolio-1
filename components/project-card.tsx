import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  href: string
  hasFireEmoji?: boolean
}

export function ProjectCard({ title, description, image, href, hasFireEmoji }: ProjectCardProps) {
  return (
    <div className="bg-[#f1f5f9] rounded-lg overflow-hidden shadow-lg">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-[#1a2744] font-bold text-lg mb-2">{title}</h3>
        <p className="text-[#6b7280] text-sm mb-4 leading-relaxed">
          {description}
          {hasFireEmoji && " 🔥"}
        </p>
        <Link
          href={href}
          className="inline-flex items-center text-[#1a2744] text-sm font-medium hover:underline"
        >
          See more
          <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  )
}
