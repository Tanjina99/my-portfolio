"use client";
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
import { useEffect } from "react";
const Projects = dynamic(() => import("@/components/Projects"), {
  ssr: false,
});
const Partners = dynamic(() => import("@/components/Partners"), {
  ssr: false,
});

const IndexDark = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("dark");
  }, []);

  return (
    <OridoLayout dark={true}>
      {/* HERO */}
      <Home dark={true} />
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
      <Feedback dark={true} />
      {/* /TESTIMONIALS */}
      {/* NEWS */}
      <Blog />
      {/* /NEWS */}
      {/* PARTNERS */}
      <Partners dark={true} />
      {/* /PARTNERS */}
      {/* CONTACT */}
      <Contact />
      {/* /CONTACT */}
    </OridoLayout>
  );
};
export default IndexDark;
