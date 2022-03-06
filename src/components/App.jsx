import React from "react";
import Navbar from "./navbar/Navbar";
import Intro from "./intro/Intro";
import About from "./about/About";
import Collection from "./collection/Collection";
import CTA from "./cta/CTA";
import Steps from "./steps/Steps.jsx";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Collection />
      <CTA />
      <Steps />
      <Footer />
    </div>
  );
}

export default App;
