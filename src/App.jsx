import { useRef, useEffect } from "react";
import AwardedWorks from "./sections/AwardedWorks/AwardedWorks";
import Clients from "./sections/Clients/Clients";
import Deliver from "./sections/Deliver/Deliver";
import Home from "./sections/Home/Home";
import SelectedWorks from "./sections/SelectedWorks/SelectedWorks";
import Team from "./sections/Team/Team";
import CTA from "./sections/CTA/CTA";
import Footer from "./sections/Footer/Footer";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

const App = () => {
  const containerRef = useRef(null);

  const options = {
    smooth: true,
  };

  return (
    <LocomotiveScrollProvider options={options}   watch={[]}   containerRef={containerRef}>
     <main className="bg-[#1e1e20]" data-scroll-container ref={containerRef}>
  <section data-scroll-section>
    <Home />
  </section>
<section data-scroll-section className="min-h-screen">
  <Deliver />
</section>

  <section data-scroll-section  className="min-h-screen">
    <SelectedWorks />
  </section>
  <section data-scroll-section  className="min-h-screen">
    <AwardedWorks />
  </section>
  <section data-scroll-section  className="min-h-screen">
    <Team />
  </section>
  <section data-scroll-section className="min-h-screen">
    <Clients />
  </section>
  <section data-scroll-section>
    <CTA />
  </section>
  <section data-scroll-section>
  <Footer />
</section>

</main>

    </LocomotiveScrollProvider>
  );
};

export default App;
