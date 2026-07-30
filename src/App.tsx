import { Home } from './pages/Home'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  )
}
