import React from "react"
import {
  About,
  Hero,
  Layout,
  Service,
  Gallery,
  Contact,
  SEO,
} from "../components"

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <About />
      <Service />
      <Gallery />
      <Contact />
    </Layout>
  )
}
