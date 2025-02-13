import { ReactNode } from "react"

import SiteHeader from "@/components/layout/site-header"

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="p-3">{children}</main>
    </>
  )
}
