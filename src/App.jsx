// import { useRef, useEffect } from "react";
// import AwardedWorks from "./sections/AwardedWorks/AwardedWorks";
// import Clients from "./sections/Clients/Clients";
// import Deliver from "./sections/Deliver/Deliver";
// import Home from "./sections/Home/Home";
// import SelectedWorks from "./sections/SelectedWorks/SelectedWorks";
// import Team from "./sections/Team/Team";
// import CTA from "./sections/CTA/CTA";
// import Footer from "./sections/Footer/Footer";
// import { LocomotiveScrollProvider } from "react-locomotive-scroll";

// const App = () => {
//   const containerRef = useRef(null);

//   const options = {
//     smooth: true,
//   };

//   return (
//     <LocomotiveScrollProvider options={options}   watch={[]}   containerRef={containerRef}>
//      <main className="bg-[#1e1e20]" data-scroll-container ref={containerRef}>
//   <section data-scroll-section>
//     <Home />
//   </section>
// <section data-scroll-section className="min-h-screen">
//   <Deliver />
// </section>

//   <section data-scroll-section  className="min-h-screen">
//     <SelectedWorks />
//   </section>
//   <section data-scroll-section  className="min-h-screen">
//     <AwardedWorks />
//   </section>
//   <section data-scroll-section  className="min-h-screen">
//     <Team />
//   </section>
//   <section data-scroll-section className="min-h-screen">
//     <Clients />
//   </section>
//   <section data-scroll-section>
//     <CTA />
//   </section>
//   <section data-scroll-section>
//   <Footer />
// </section>

// </main>

//     </LocomotiveScrollProvider>
//   );
// };

// export default App;


import { useRef } from "react";
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
    
      <main className="bg-[#1e1e20]" data-scroll-container ref={containerRef}>
        
        {/* Hero - should fill full screen */}
        <section data-scroll-section className="min-h-screen">
          <Home />
        </section>

        {/* Normal flow sections with padding */}
        <section data-scroll-section className="py-20">
          <Deliver />
        </section>

        <section data-scroll-section className="py-20">
          <SelectedWorks />
        </section>

        <section data-scroll-section className="py-20">
          <AwardedWorks />
        </section>

        <section data-scroll-section className="py-20">
          <Team />
        </section>

        <section data-scroll-section className="py-20">
          <Clients />
        </section>

        {/* CTA + Footer */}
        <section data-scroll-section className="py-20">
          <CTA />
        </section>
        <section data-scroll-section>
          <Footer />
        </section>
      </main>
  
  );
};

export default App;



// <LocomotiveScrollProvider options={options} watch={[]} containerRef={containerRef}>
// </LocomotiveScrollProvider> 