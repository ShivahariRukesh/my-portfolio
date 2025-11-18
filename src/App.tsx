
import { useEffect, useState } from 'react';


import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from './components/Hero/Hero'
import Main from './components/Main';
import { metadata } from './config/metadata';
import SEO from './components/Seo';
import InitialLoadPage from './components/InitialPageLoader/InitialPageLoader';
import ResponsiveGate from './components/ResponsiveGate';

gsap.registerPlugin(ScrollTrigger);

function App() {

  const [loading, setLoading] = useState(true);

  const [isDesktop, setIsDesktop] = useState(false);



  useEffect(() => {
    const checkViewport = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);


  useEffect(() => {
    document.dispatchEvent(new Event('render-complete'))
  }, [])

  useEffect(() => {
    const handleLoad = () => {
      // Small delay to ensure smoothness
      setTimeout(() => {
        const event = new Event("loaderExit");
        window.dispatchEvent(event);
      }, 3000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);




  if (loading) {
    return (
      <InitialLoadPage
        onComplete={() => {
          setLoading(false);
        }}
      />
    )
  }

  if (!isDesktop) {

    return <ResponsiveGate />
  }


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
