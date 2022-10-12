import React from "react";

import Hero from "../Hero/hero";
import Programs from "../Programs/programs";
import Reasons from "../Reasons/reasons";
import Plans from "../Plans/plans";
import Testimonials from "../Testimonials/testimonials";
import Join from "../Join/join";
import Footer from "../Footer/footer";

function Homepage() {
  return (
    <div>
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default Homepage;
