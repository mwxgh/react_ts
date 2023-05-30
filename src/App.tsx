import Contact from './components/Contact'
import Hero from './components/Hero'
import Who from './components/Who'
import Works from './components/Works'

const App = () => {
  return (
    <div className="min-h-screen snap-y overflow-y-auto scroll-smooth bg-[url(./img/bg.jpeg)] text-white">
      <Hero />
      <Who />
      <Works />
      <Contact />
    </div>
  )
}

export default App
