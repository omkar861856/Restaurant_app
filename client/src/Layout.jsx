import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const Layout = ({children}) => {
  return (
   <div class="parentLayout">
    <header class="sectionLayout"><Navbar /></header>
    <main class="sectionLayout">{children}</main>
    <footer class="sectionLayout"><Footer /></footer>
  </div>
  
  )
}

export default Layout