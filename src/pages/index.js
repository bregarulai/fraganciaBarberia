import React from "react"
import { About, Hero, Layout, Service, Team } from "../components"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Service />
      <Team />
    </Layout>
  )
}
