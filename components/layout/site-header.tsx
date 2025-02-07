import Navbar from "@/components/layout/navbar"

export default function SiteHeader() {
  return (
    <header className="fixed left-3 top-3 z-50 rounded-br-[18px] bg-background">
      <div className="relative">
        <Navbar />
      </div>
    </header>
  )
}
