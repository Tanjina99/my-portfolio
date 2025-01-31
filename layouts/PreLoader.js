"use client";
import { oridoUtilits } from "@/utility";
import { useEffect } from "react";

const PreLoader = () => {
  useEffect(() => {
    oridoUtilits.preloader();
  }, []);

  return (
    <div id="preloader">
      <div className="loader_line" />
    </div>
  );
};
export default PreLoader;
