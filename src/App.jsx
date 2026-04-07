import { Outlet } from "react-router"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"

function App() {

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
          <Outlet/>
      </main>
      <footer>
          <Footer/>
      </footer>
    </div>
  )
}

export default App
