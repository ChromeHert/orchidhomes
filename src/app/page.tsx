import About from "@/components/About"
import FeaturedProp from "@/components/FeaturedProp"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import Services from "@/components/Services"
import Works from "@/components/Works"

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Works />
      <FeaturedProp />
      <Services />
      <About />
    </>  
  )
}

export default Home