import Nav from "../components/Nav"
import Hero from "../components/Hero"
import About from "../components/About"
import Services from "../components/Services"
import Featured from "../components/Featured"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import CalltoAction from "../components/CalltoAction"

export default function Home() {
  return (
    <>
      <Nav />
      <Hero/>
      <About />      
      <Services />
      <Featured/>
      <CalltoAction />
      <Contact />
      <Footer />
    </> 
  )
}
