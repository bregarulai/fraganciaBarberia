import React, { useContext } from "react"
import Footer from "./Footer"
import Navigation from "./Navigation"
import { GatsbyContext } from "../context/context"
import Sidedrawer from "./Sidedrawer"

const Layout = ({ children }) => {
  const { isSidebarOpen } = useContext(GatsbyContext)
  return (
    <>
      <Navigation />
      {isSidebarOpen && <Sidedrawer />}
      {children}
      <Footer />
    </>
  )
}

export default Layout
