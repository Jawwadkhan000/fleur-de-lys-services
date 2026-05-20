import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Process from "../components/sections/Process";
import About from "../components/sections/About";
import Testimonials from "../components/sections/Testimonials";
import CTA from "../components/sections/CTA";
import Contact from "../components/sections/Contact";
import Certify from "../components/sections/Certify";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <About />
      <CTA />
      <Testimonials />
      <Certify />
      <Contact />
    </>
  );
}

export default Home;
