import React from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Services from "./components/Services";
import Machines from "./components/Machines";

export default function App() {
  return (
    <React.Fragment>
      <Nav />
      <Hero />
      <About />
      <Services />
      <Machines />
      <Footer />
    </React.Fragment>
  );
}
