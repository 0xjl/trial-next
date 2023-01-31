import { fetcher } from '../lib/api';
import Nav from "../components/Nav"
import Hero from "../components/Hero"
import About from "../components/About"
import Featured from "../components/Featured"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import CalltoAction from "../components/CalltoAction"
import Jiaherb from "../components/Jiaherb"

const Home = ({hero, component}) => {
  return (
    <>
      <Nav />
      <Hero hero={hero} />
      <About component={component} />
      <Jiaherb />
      <Featured />
      <CalltoAction />
      <Contact />
      <Footer />
    </>
  )
}

export default Home;

export async function getStaticProps(){
  const heroResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/heroes?populate=*`
    );
  const componentResponse = await fetcher(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/components/`
      );
      return {
      props: {
          hero: heroResponse,
          component: componentResponse,
      },
  }
}


