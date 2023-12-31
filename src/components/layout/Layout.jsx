import { Fragment } from "react";
import Header from "../header/Header";
import HeroSection from "../hero-section/HeroSection";
import About from "../about/About";
import Experience from "../experience/Experience";
import Portfolio from "../portfolio/Portfolio";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import Sertif from "../sertif/Sertif";

function Layout() {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <About />
      <Experience />
      <Portfolio />
      <Sertif />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default Layout;
