import { Suspense, lazy } from "react";
import logo from "./assets/logos/logo.svg";

const Navbar = lazy(() => import("./sections/Navbar"));
const Partners = lazy(() => import("./sections/Partners"));
const SectionThree = lazy(() => import("./sections/SectionThree"));
const Modal = lazy(() => import("./modals/Modal"));
const Communities = lazy(() => import("./sections/Communities"));
const Hero = lazy(() => import("./sections/Hero"));
const SectionFour = lazy(() => import("./sections/SectionFour"));
const WhyBTH = lazy(() => import("./sections/WhyBTH"));
const SectionSeven = lazy(() => import("./sections/SectionSeven"));
const SectionEight = lazy(() => import("./sections/SectionEight"));
const PresidentAndTutors = lazy(() => import("./sections/PresidentAndTutors"));
const Evidence = lazy(() => import("./sections/Evidence"));
const BTHExecutives = lazy(() => import("./sections/BTHExecutives"));
const FAQ = lazy(() => import("./sections/FAQ"));
const CTA = lazy(() => import("./sections/CTA"));
const Footer = lazy(() => import("./sections/Footer"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="fixed h-screen w-screen flex justify-center items-center bg-white">
          <div className="animate-spin">
            <img src={logo} className="animate-pulse w-[100px] md:w-[150px]" />
          </div>
        </div>
      }
    >
      <Modal />
      <Navbar />
      <Hero />
      <Partners />
      <SectionThree />
      <SectionFour />
      <WhyBTH />
      <Communities />
      <SectionSeven />
      <SectionEight />
      <PresidentAndTutors />
      <Evidence />
      <BTHExecutives />
      <FAQ />
      <CTA />
      <Footer />
    </Suspense>
  );
}

export default App;
