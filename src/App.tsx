import { Backdrop } from './components/Backdrop'
import { ScrollProgress } from './components/ScrollProgress'
import { Navbar } from './sections/Navbar'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { ResearchAreas } from './sections/ResearchAreas'
import { Methodology } from './sections/Methodology'
import { Projects } from './sections/Projects'
import { Vision } from './sections/Vision'
import { Principles } from './sections/Principles'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'

export default function App() {
  return (
    <>
      <Backdrop />
      <ScrollProgress />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:rounded-none focus:border focus:border-edge focus:bg-panel focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <ResearchAreas />
        <Methodology />
        <Projects />
        <Vision />
        <Principles />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
