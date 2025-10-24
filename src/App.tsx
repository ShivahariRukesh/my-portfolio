
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from './components/Hero/Hero'
import Main from './components/Main';

gsap.registerPlugin(ScrollTrigger);

function App() {

  return (

    <>
      <Hero />
      <Main />
    </>


  )
}

export default App
