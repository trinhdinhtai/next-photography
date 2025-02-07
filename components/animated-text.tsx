import { cn } from "@/lib/utils"

interface Props {
  label: string
  label2?: string
  style?: string
}

const AnimatedText = ({ label, label2, style }: Props) => {
  return (
    <div
      className="relative inline-block overflow-hidden"
      style={{ lineHeight: 0.75 }}
    >
      <div
        className={cn("group relative inline-block text-sm font-light", style)}
      >
        {/* Default Text (visible initially, moves down on hover) */}
        <span className="block transform transition-transform duration-300 ease-in-out group-hover:translate-y-full">
          {label}
        </span>

        {/* Hover Text (hidden initially, moves up on hover) */}
        <span className="absolute inset-0 -translate-y-full transform transition-transform duration-300 ease-in-out group-hover:-translate-y-0">
          {label2 || label}
        </span>
      </div>
    </div>
  )
}

export default AnimatedText
