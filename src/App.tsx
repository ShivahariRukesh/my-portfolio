
import { useEffect, useState } from 'react';


import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from './components/Hero/Hero'
import Main from './components/Main';
import { metadata } from './config/metadata';
import SEO from './components/Seo';
import InitialLoadPage from './components/InitialPageLoader/InitialPageLoader';

gsap.registerPlugin(ScrollTrigger);

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.dispatchEvent(new Event('render-complete'))
  }, [])

  useEffect(() => {
    const handleLoad = () => {
      // Small delay to ensure smoothness
      setTimeout(() => {
        // Dispatch custom event to trigger GSAP exit animation
        const event = new Event("loaderExit");
        window.dispatchEvent(event);
      }, 3000); // keep loader visible briefly after load
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);
  return (
    <>


      {loading && (
        <InitialLoadPage
          onComplete={() => {
            setLoading(false);
          }}
        />
      )}
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
