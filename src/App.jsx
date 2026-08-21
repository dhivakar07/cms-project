import Api from "./components/Api";
import Control from "./components/Control";
import Dashboard from "./components/Dashboard";
import Ecosystem from "./components/Ecosystem";
import FAQS from "./components/FAQS";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Frontends from "./components/Frontends";
import Getstarted from "./components/Getstarted";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Livechanges from "./components/Livechanges";
import MultiTenant from "./components/MultiTenant";
import OneAPI from "./components/OneAPI";
import Personas from "./components/Personas";
import Security from "./components/Security";
import Steps from "./components/Steps";
import Teams from "./components/Teams";
import Workflow from "./components/Workflow";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Ecosystem />
      <Workflow />
      <OneAPI />
      <Features />
      <Teams />
      <Frontends />
      <Livechanges />
      <Dashboard />
      <Steps />
      <Control />
      <MultiTenant />
      <Security />
      <Api />
      <FAQS />
      <Personas />
      <Getstarted />
      <Footer />
    </>
  );
}

export default App;
