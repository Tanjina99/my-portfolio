import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Counter from "@/components/Counter";
import ExpertAreas from "@/components/ExpertAreas";
import Feedback from "@/components/Feedback";
import Home from "@/components/Home";
import Services from "@/components/Services";
import OridoLayout from "@/layouts/OridoLayout";

import dynamic from "next/dynamic";
const Projects = dynamic(() => import("@/components/Projects"), {
  ssr: false,
});
const Partners = dynamic(() => import("@/components/Partners"), {
  ssr: false,
});

const Index = () => {
  return (
    <OridoLayout>
      {/* HERO */}
      <Home />
      {/* /HERO */}
      {/* ABOUT */}
      <About />
      {/* /ABOUT */}
      {/* INFORMATIONS */}
      <ExpertAreas />
      {/* /INFORMATIONS */}
      {/* COUNTER */}
      <Counter />
      {/* /COUNTER */}
      {/* SERVICE */}
      <Services />
      {/* /SERVICE */}
      {/* PORTFOLIO */}
      <Projects />
      {/* /PORTFOLIO */}
      {/* TESTIMONIALS */}
      <Feedback />
      {/* /TESTIMONIALS */}
      {/* NEWS */}
      <Blog />
      {/* /NEWS */}
      {/* PARTNERS */}
      <Partners />
      {/* /PARTNERS */}
      {/* CONTACT */}
      <Contact />
      {/* /CONTACT */}
    </OridoLayout>
  );
};
export default Index;
