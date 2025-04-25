"use client";
import { context } from "@/context/context";
import { oridoUtilits } from "@/utility";
import { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper";
import { motion } from "framer-motion";
import Link from "next/link";

const Projects = () => {
  useEffect(() => {
    oridoUtilits.dataImage();
  }, []);

  const { setPortfolioModal, modalToggle } = useContext(context);
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      title: "High paid jobs",
      category: "E-commerce",
      image: "/assets/img/projects/highpaid.png",
      description: "an e-commerce static website",
      technologies: ["NextJs", "Tailwind"],
      live_link: "https://highpaidjobs-tss.vercel.app",
    },
    {
      title: "RoadKing",
      category: "Automotive",
      image: "/assets/img/projects/bikeproject.png",
      description:
        "Revolutionizing two-wheeler experiences with style and performance.",
      technologies: ["ReactJs", "Sass"],
      live_link: "https://theroadking.netlify.app",
    },
    {
      title: "Sizzle & Spice",
      category: "Food & Recipes",
      image: "/assets/img/projects/cookingproject.png",
      description:
        "Bringing delicious recipes and cooking inspiration to your kitchen.",
      technologies: ["ReactJs", "Tailwind"],
      live_link: "https://cookingflavor.netlify.app",
    },
    {
      title: "HeartfulHands",
      category: "Non-Profit & Charity",
      image: "/assets/img/projects/donationproject.png",
      description:
        "Empowering change through generous giving and community support.",
      technologies: ["ReactJs", "Tailwind"],
      live_link: "https://donation-hub-online.netlify.app",
    },
    {
      title: "MealsHub",
      category: "Food & Delivery",
      image: "/assets/img/projects/mealsHub.png",
      description:
        "Delicious meals delivered to your door with speed and flavor.",
      technologies: ["NextJs", "Tailwind"],
      live_link: "https://meals-hub-tau.vercel.app",
    },
  ];

  const titleVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div
      className="float-left clear-both w-full h-auto orido_tm_section"
      id="portfolio"
    >
      <div className="orido_tm_portfolio w-full h-auto clear-both float-left bg-gradient-to-b from-[#f8f9ff] to-[#fafafb] px-0 pt-[120px] pb-[110px]">
        <div className="container">
          <div>
            <motion.div
              className="float-left w-full orido_tm_main_title"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={titleVariants}
            >
              <h3 className="tracking-[-2px] text-[56px] font-bold">
                <span className="relative">
                  My
                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    viewport={{ once: true }}
                  />
                  <br />
                  Projects
                </span>
              </h3>
            </motion.div>

            {/* <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
              A showcase of my recent work and projects that highlight my skills
              in web development and design.
            </p> */}
          </div>

          <div className="portfolio_list w-full h-auto clear-both float-left mt-[65px] relative">
            <Swiper
              modules={[Navigation, Pagination, EffectCoverflow]}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView="auto"
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              pagination={{ clickable: true, el: ".orido_pagination" }}
              navigation={{
                nextEl: ".next_button",
                prevEl: ".prev_button",
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              className="relative owl-carousel gallery_zoom"
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2.5 },
              }}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`list_inner transform transition-all duration-500 ${
                      activeIndex === index
                        ? "scale-105"
                        : "scale-95 opacity-80"
                    }`}
                  >
                    <div className="relative overflow-hidden image rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <img
                        className="relative min-w-full opacity-0"
                        src="assets/img/thumbs/37-40.jpg"
                        alt=""
                      />
                      <div
                        className="absolute inset-0 transition-all duration-500 bg-center bg-no-repeat bg-cover main hover:scale-110"
                        data-img-url={project.image}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-10 transition-all duration-300"></div>
                    </div>

                    <div className="details w-full float-left mt-[30px] p-4">
                      <div className="flex justify-between items-center mb-3">
                        <span className="category text-[5px] inline-block mb-[5px] px-2 py-1 bg-[#e9efff] text-[#5e8df8] rounded-full font-medium">
                          {project.category}
                        </span>
                        <div className="flex space-x-2">
                          <a
                            href="#"
                            className="text-gray-500 hover:text-[#5e8df8] transition-colors"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>

                      <h3 className="title text-[24px] tracking-[-1px] font-medium">
                        <span className="relative inline-block">
                          {project.title}
                        </span>
                      </h3>
                      <p className="mt-2 text-gray-600">
                        {project.description}
                      </p>

                      <div className="mt-6 flex justify-between items-center">
                        <Link href={`${project.live_link}`}>
                          <button
                            // onClick={(e) => {
                            //   e.preventDefault();
                            //   modalToggle(true);
                            //   setPortfolioModal("item");
                            // }}
                            className="px-4 py-2 bg-[#5e8df8] text-white rounded-lg hover:bg-[#4b7af0] transition-colors duration-300 flex items-center"
                          >
                            Visit live link
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 ml-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </svg>
                          </button>
                        </Link>

                        <div className="flex space-x-1">
                          {project.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
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
              ))}
            </Swiper>

            {/* Custom pagination */}
            <div className="orido_pagination flex justify-center mt-8 space-x-2"></div>

            {/* Navigation buttons */}
            <a
              className="prev_button absolute top-1/2 left-4 transform -translate-y-1/2 z-10 bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-[#e9efff] transition-colors"
              href="#"
            >
              <img
                className="svg absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[30px] h-[30px] transition-all duration-300 ml-[-1px]"
                src="assets/img/svg/prev.svg"
                alt=""
              />
            </a>
            <a
              className="next_button absolute top-1/2 right-4 transform -translate-y-1/2 z-10 bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-[#e9efff] transition-colors"
              href="#"
            >
              <img
                className="svg absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[30px] h-[30px] transition-all duration-300 ml-[1px]"
                src="assets/img/svg/next.svg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
