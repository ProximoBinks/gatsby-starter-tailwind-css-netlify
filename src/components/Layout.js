import React from "react"
import SEO from "./SEO"
import Header from "./Header" // Adjust the path based on your file structure
import Footer from "./Footer" // Adjust the path based on your file structure

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <div className="flex flex-col min-h-screen bg-gray-200">
        <Header />
        <main className="flex-grow">{children}</main> {/* This line is updated */}
        <Footer />
      </div>
    </>
  )
}

export default Layout