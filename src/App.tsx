import { Backdrop } from './components/Backdrop'
import { ScrollProgress } from './components/ScrollProgress'
import { Navbar } from './sections/Navbar'
import { Hero } from './sections/Hero'
import { Pipeline } from './sections/Pipeline'
import { Capabilities } from './sections/Capabilities'
import { Architecture } from './sections/Architecture'
import { OpenSource } from './sections/OpenSource'
import { Roadmap } from './sections/Roadmap'
import { FinalCta } from './sections/FinalCta'
import { Footer } from './sections/Footer'

export default function App() {
  return (
    <>
      <Backdrop />
      <ScrollProgress />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:rounded-md focus:border focus:border-edge focus:bg-panel focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <Pipeline />
        <Capabilities />
        <Architecture />
        <OpenSource />
        <Roadmap />
        <FinalCta />
      </main>

      <Footer />
    </>
  )
}
