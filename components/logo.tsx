import Link from "next/link"
import { RiCameraLensFill } from "react-icons/ri"

import AnimatedText from "@/components/animated-text"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <RiCameraLensFill size={18} />
      <AnimatedText
        label="BongHien"
        label2="Photo"
        style="font-medium uppercase"
      />
    </Link>
  )
}

export default Logo
