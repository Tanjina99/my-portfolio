"use client";
import { context } from "@/context/context";
import { Fragment, useContext } from "react";
import BlogPopup from "./BlogPopup";
import EmbedPopup from "./EmbedPopup";
import ImageView from "./ImageView";
import ProjectPopup from "./ProjectPopup";
import ServicePopup from "./ServicePopup";
const Popup = () => {
  const { modal, portfolioModal, blogModal, serviceModal } =
    useContext(context);
  return (
    <Fragment>
      <EmbedPopup />
      <ImageView />
      {modal && serviceModal && <ServicePopup />}
      {modal && portfolioModal && <ProjectPopup />}
      {modal && blogModal && <BlogPopup />}
    </Fragment>
  );
};
export default Popup;
