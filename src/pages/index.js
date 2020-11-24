import React from "react"
import {
  About,
  Hero,
  Layout,
  Service,
  Team,
  Gallery,
  Contact,
} from "../components"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Service />
      <Team />
      <Gallery />
      <Contact />
    </Layout>
  )
}
