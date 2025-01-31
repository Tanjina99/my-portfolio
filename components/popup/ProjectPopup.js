"use client";
import { context } from "@/context/context";
import { useContext } from "react";
import PopupContainer from "./PopupContainer";
const ProjectPopup = () => {
  const { setPortfolioModal } = useContext(context);
  return (
    <PopupContainer nullValue={setPortfolioModal}>
      <div className="popup_details">
        <div className="top_image">
          <img src="assets/img/thumbs/4-2.jpg" alt />
          <div
            className="main"
            data-img-url="assets/img/portfolio/4.jpg"
            style={{ backgroundImage: 'url("assets/img/portfolio/4.jpg")' }}
          />
        </div>
        <div className="portfolio_main_title">
          <span>
            <a href="#">Details</a>
          </span>
          <h3>Mockup Phone</h3>
          <div />
        </div>
        <div className="main_details">
          <div className="textbox">
            <p>
              We live in a world where we need to move quickly and iterate on
              our ideas as flexibly as possible.
            </p>
            <p>
              Mockups are useful both for the creative phase of the project -
              for instance when you're trying to figure out your user flows or
              the proper visual hierarchy - and the production phase when they
              phase when they will represent the target product. Building
              mockups strikes the ideal balance ease of modification.
            </p>
          </div>
          <div className="detailbox">
            <ul>
              <li>
                <span className="first">Client</span>
                <span>Alvaro Morata</span>
              </li>
              <li>
                <span className="first">Category</span>
                <span>
                  <a href="#">Detail</a>
                </span>
              </li>
              <li>
                <span className="first">Date</span>
                <span>April 22, 2022</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="additional_images">
          <ul>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <img src="assets/img/thumbs/4-2.jpg" alt />
                  <div
                    className="main"
                    data-img-url="assets/img/service/1.jpg"
                    style={{
                      backgroundImage: 'url("assets/img/service/1.jpg")',
                    }}
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <img src="assets/img/thumbs/4-2.jpg" alt />
                  <div
                    className="main"
                    data-img-url="assets/img/service/2.jpg"
                    style={{
                      backgroundImage: 'url("assets/img/service/2.jpg")',
                    }}
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <img src="assets/img/thumbs/4-2.jpg" alt />
                  <div
                    className="main"
                    data-img-url="assets/img/service/3.jpg"
                    style={{
                      backgroundImage: 'url("assets/img/service/3.jpg")',
                    }}
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </PopupContainer>
  );
};
export default ProjectPopup;
