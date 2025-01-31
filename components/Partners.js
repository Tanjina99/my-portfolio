"use client";
import { sliderProps } from "@/utility/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
const partnersLogo = {
  light: [
    "assets/img/partners/1.png",
    "assets/img/partners/2.png",
    "assets/img/partners/3.png",
    "assets/img/partners/4.png",
    "assets/img/partners/5.png",
    "assets/img/partners/6.png",
    "assets/img/partners/7.png",
    "assets/img/partners/8.png",
  ],
  dark: [
    "assets/img/partners/light/1.png",
    "assets/img/partners/light/2.png",
    "assets/img/partners/light/3.png",
    "assets/img/partners/light/4.png",
    "assets/img/partners/light/5.png",
    "assets/img/partners/light/6.png",
    "assets/img/partners/light/7.png",
    "assets/img/partners/light/8.png",
  ],
};
const Partners = ({ dark }) => {
  return (
    <div className="orido_tm_section w-full h-auto clear-both float-left">
      <div className="orido_tm_partners w-full h-auto clear-both float-left px-0 pt-[40px] pb-[110px]">
        <div className="container">
          <div className="partners_list w-full h-auto clear-both float-left mt-[35px] relative">
            <Swiper {...sliderProps.partners} className="owl-carousel">
              {partnersLogo[dark ? "dark" : "light"].map((partnersLogo, i) => (
                <SwiperSlide className="item" key={i}>
                  <a href="#">
                    <img
                      className="opacity-[.5] transition-all duration-300"
                      src={partnersLogo}
                      alt
                    />
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Partners;
