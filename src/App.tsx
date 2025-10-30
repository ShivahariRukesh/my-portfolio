
import { useEffect } from 'react';


import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from './components/Hero/Hero'
import Main from './components/Main';
import { metadata } from './config/metadata';
import SEO from './components/Seo';

gsap.registerPlugin(ScrollTrigger);

function App() {


  useEffect(() => {
    document.dispatchEvent(new Event('render-complete'))
  }, [])
  return (
    <>
      <SEO
        title={metadata.title}
        description={metadata.description}
        keywords={metadata.keywords}
        image={`${metadata.siteUrl}${metadata.image}`}
        url={metadata.siteUrl}
      />
      <Hero />
      <Main />
    </>


  )
}

export default App
