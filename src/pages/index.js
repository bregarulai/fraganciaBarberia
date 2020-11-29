import React from "react"
import { About, Hero, Layout, Service, Gallery, Contact } from "../components"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Service />
      <Gallery />
      <Contact />
    </Layout>
  )
}
