"use client";
import { context } from "@/context/context";
import { oridoUtilits } from "@/utility";
import { sliderProps } from "@/utility/sliderProps";
import { useContext, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
const Projects = () => {
  useEffect(() => {
    oridoUtilits.dataImage();
  }, []);

  const { setPortfolioModal, modalToggle } = useContext(context);

  return (
    <div
      className="float-left clear-both w-full h-auto orido_tm_section"
      id="portfolio"
    >
      <div className="orido_tm_portfolio w-full h-auto clear-both float-left bg-[#FFC448] px-0 pt-[120px] pb-[110px]">
        <div className="container">
          <div className="float-left w-full orido_tm_main_title">
            <h3 className="tracking-[-2px] text-[56px] font-bold">
              <span className="relative">
                Look at my
                <br />
                recent projects
              </span>
            </h3>
          </div>
          <div className="portfolio_list w-full h-auto clear-both float-left mt-[65px] relative">
            <Swiper
              {...sliderProps.project}
              className="relative owl-carousel gallery_zoom"
            >
              <SwiperSlide>
                <div className="list_inner">
                  <div className="relative overflow-hidden image">
                    <img
                      className="relative min-w-full opacity-0"
                      src="assets/img/thumbs/37-40.jpg"
                      alt
                    />
                    <div
                      className="absolute inset-0 transition-all duration-300 bg-center bg-no-repeat bg-cover main"
                      data-img-url="https://i.imgur.com/ADnYmOq.png"
                    />
                  </div>
                  <div className="details w-full float-left mt-[30px]">
                    <span className="category text-[20px] inline-block mb-[13px]">
                      BootCampshub
                    </span>
                    <h3 className="title text-[32px] tracking-[-1px] font-medium">
                      <span className="relative inline-block">LMS</span>
                    </h3>
                  </div>
                  {/* <a
                    className="orido_tm_full_link absolute inset-0 z-[5] popup-youtube"
                    href="https://www.youtube.com/watch?v=7e90gBu4pas"
                  /> */}
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="list_inner">
                  <div className="relative overflow-hidden image">
                    <img
                      className="relative min-w-full opacity-0"
                      src="assets/img/thumbs/37-40.jpg"
                      alt
                    />
                    <div
                      className="absolute inset-0 transition-all duration-300 bg-center bg-no-repeat bg-cover main"
                      data-img-url="https://i.imgur.com/JZYuVF5.png"
                    />
                  </div>
                  <div className="details w-full float-left mt-[30px]">
                    <span className="category text-[20px] inline-block mb-[13px]">
                      JOB portal
                    </span>
                    <h3 className="title text-[32px] tracking-[-1px] font-medium">
                      <span className="relative inline-block">
                        Job Searching Site
                      </span>
                    </h3>
                  </div>
                  {/* <a
                    className="orido_tm_full_link absolute inset-0 z-[5] popup-vimeo"
                    href="https://vimeo.com/337293658"
                  /> */}
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="list_inner">
                  <div className="relative overflow-hidden image">
                    <img
                      className="relative min-w-full opacity-0"
                      src="assets/img/thumbs/37-40.jpg"
                      alt
                    />
                    <div
                      className="absolute inset-0 transition-all duration-300 bg-center bg-no-repeat bg-cover main"
                      data-img-url="https://i.imgur.com/KtGpXur.png"
                    />
                  </div>
                  <div className="details w-full float-left mt-[30px]">
                    <span className="category text-[20px] inline-block mb-[13px]">
                      OrbitTask <span>{"(Previously AgileALM)"}</span>
                    </span>
                    <h3 className="title text-[32px] tracking-[-1px] font-medium">
                      <span className="relative inline-block">
                        Project Management
                      </span>
                    </h3>
                  </div>
                  {/* <a
                    className="orido_tm_full_link absolute inset-0 z-[5] soundcloude_link mfp-iframe audio"
                    href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                  /> */}
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="list_inner">
                  <div className="relative overflow-hidden image">
                    <img
                      className="relative min-w-full opacity-0"
                      src="assets/img/thumbs/37-40.jpg"
                      alt
                    />
                    <div
                      className="absolute inset-0 transition-all duration-300 bg-center bg-no-repeat bg-cover main"
                      data-img-url="https://i.imgur.com/czociN6.jpg"
                    />
                  </div>
                  <div className="details w-full float-left mt-[30px]">
                    <span className="category text-[20px] inline-block mb-[13px]">
                      GiveHub
                    </span>
                    <h3 className="title text-[32px] tracking-[-1px] font-medium">
                      <span className="relative inline-block">
                       Donation campaign
                      </span>
                    </h3>
                  </div>
                  <a
                    className="orido_tm_full_link absolute inset-0 z-[5] details_link"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      modalToggle(true);
                      setPortfolioModal("item");
                    }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="list_inner">
                  <div className="relative overflow-hidden image">
                    <img
                      className="relative min-w-full opacity-0"
                      src="assets/img/thumbs/37-40.jpg"
                      alt
                    />
                    <div
                      className="absolute inset-0 transition-all duration-300 bg-center bg-no-repeat bg-cover main"
                      data-img-url="https://i.imgur.com/wuOHTsx.png"
                    />
                  </div>
                  <div className="details w-full float-left mt-[30px]">
                    <span className="category text-[20px] inline-block mb-[13px]">
                    Summer Sale
                    </span>
                    <h3 className="title text-[32px] tracking-[-1px] font-medium">
                      <span className="relative inline-block">E-commerce <span>{"(DOM)"}</span></span>
                    </h3>
                  </div>
                  {/* <a
                    className="orido_tm_full_link absolute inset-0 z-[5] zoom"
                    href="assets/img/portfolio/5.jpg"
                  /> */}
                </div>
              </SwiperSlide>
            </Swiper>
            <a className="prev_button" href="#">
              <img
                className="svg absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[30px] h-[30px] transition-all duration-300 ml-[-1px]"
                src="assets/img/svg/prev.svg"
                alt
              />
            </a>
            <a className="next_button" href="#">
              <img
                className="svg absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[30px] h-[30px] transition-all duration-300 ml-[1px]"
                src="assets/img/svg/next.svg"
                alt
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
