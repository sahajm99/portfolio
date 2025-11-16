import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Home

