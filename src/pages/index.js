import React from "react"
import { About, Hero, Layout, Service } from "../components"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Service />
    </Layout>
  )
}
