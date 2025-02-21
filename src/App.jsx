import React from "react";
import "./assets/css/vendor/bootstrap.min.css";
import "./assets/css/plugins/lightbox.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import DemoSec from "./components/DemoSec";
import AllOtherPages from "./components/AllOtherPages";
import Features from "./components/Features";
import FeedBack from "./components/FeedBack";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main className="page-wrapper">
        <Header />
        <HeroSection />

        <div class="rbt-separator-mid">
          <div class="container">
            <hr class="rbt-separator m-0" />
          </div>
        </div>

        <DemoSec />
        <AllOtherPages />
        <Features />
        <FeedBack />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}

export default App;
