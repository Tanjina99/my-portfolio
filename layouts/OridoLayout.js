"use client";
import Popup from "@/components/popup/Popup";
import { oridoUtilits } from "@/utility";
import { Fragment, useEffect } from "react";
import CopyRight from "./CopyRight";
import Header from "./Header";
import MobileHeader from "./MobileHeader";
import Mouse from "./Mouse";
import ProgressBar from "./ProgressBar";
const OridoLayout = ({ children, dark }) => {
  useEffect(() => {
    oridoUtilits.dataImage();
    oridoUtilits.imgToSVG();
    oridoUtilits.scrollSection();
    window.addEventListener("scroll", oridoUtilits.stickyNav);
    window.addEventListener("scroll", oridoUtilits.sectionScroll);
  }, []);

  return (
    <Fragment>
      <div
        className="orido_tm_all_wrap w-full float-left clear-both h-auto relative"
        data-magic-cursor="show"
      >
        <Popup />
        <MobileHeader dark={dark} />
        <Header dark={dark} />
        {children}
        <CopyRight />
        <Mouse />
        <ProgressBar />
      </div>
    </Fragment>
  );
};
export default OridoLayout;
