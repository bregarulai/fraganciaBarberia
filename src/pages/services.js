import React from "react"
import { Layout, PageService, SEO } from "../components/"
import { PageBackground } from "../components/"

const services = () => {
  return (
    <Layout>
      <SEO title="Services" />
      <PageBackground />
      <PageService />
    </Layout>
  )
}

export default services
