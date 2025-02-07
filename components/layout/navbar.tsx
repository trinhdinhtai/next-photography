import FlipLink from "@/components/flip-link"
import Logo from "@/components/logo"

export default function Navbar() {
  return (
    <nav>
      <div className="relative flex items-center gap-5 px-4 pb-3">
        <Logo />
        <div className="hidden gap-4 lg:flex">
          <FlipLink href="/travel">Travel</FlipLink>
          <FlipLink href="/discover">Discover</FlipLink>
          <FlipLink href="/blog">Blog</FlipLink>
          <FlipLink href="/about">About</FlipLink>
        </div>
      </div>
    </nav>
  )
}
