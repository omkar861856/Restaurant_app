/* eslint-disable react/prop-types */

///src/Layout.jsx
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const Layout = ({children}) => {
  return (
   <div className="parentLayout">
    <header className="sectionLayout"><Navbar /></header>
    <main className="sectionLayout">{children}</main>
    <footer className="sectionLayout"><Footer /></footer>
  </div>
  
  )
}

export default Layout