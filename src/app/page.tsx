import About from "@/components/About"
import Faq from "@/components/Faq"
import FeaturedProp from "@/components/FeaturedProp"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import Services from "@/components/Services"
import Testimonials from "@/components/Testimonials"
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
      <Testimonials />
      <Faq />
      <Footer />
    </>  
  )
}

export default Home