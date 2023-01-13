import React from "react";
import "./assets/styles/landingpages.scss";
import HeroSection from "./components/HeroSection";
import NavigationBar from "./components/NavigationBar";

const App = () => {
  return (
    <>
      <NavigationBar />
      <HeroSection />
    </>
  );
};

export default App;
