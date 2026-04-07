import { Outlet } from "react-router"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"

function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <Navbar />
      </header>
      <main className="lg:px-10 xl:px-20 lg:pt-5 xl:pt-12 mb-10">
          <Outlet/>
      </main>
      <footer>
          <Footer/>
      </footer>
    </div>
  )
}

export default App
