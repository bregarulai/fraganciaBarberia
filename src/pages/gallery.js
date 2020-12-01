import React from "react"
import { Layout, PageGallery, PageBackground, SEO } from "../components"

const gallery = () => {
  return (
    <Layout>
      <SEO title="Gallery" />
      <PageBackground />
      <PageGallery />
    </Layout>
  )
}

export default gallery
