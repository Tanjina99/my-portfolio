"use client";
import { context } from "@/context/context";
import { oridoUtilits } from "@/utility";
import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";

const serviceData = [
  {
    id: 1,
    name: "Frontend Development",
    img: "http://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/asset/file/abd1becc-8b3c-4a83-8249-ce0b9b7cc288/top-ai-tools-for-frontend-developers-faster-ui-building.png?t=1718370712",
    description: [
      "I specialize in building dynamic, responsive, and user-friendly web applications using modern technologies like React, JavaScript, TypeScript, HTML, and CSS.",
      "My focus is on creating seamless user experiences with optimized performance, accessibility, and clean code structure.",
      "From single-page applications to full-scale web platforms, I ensure high-quality development that aligns with your business goals.",
    ],
  },
  {
    id: 2,
    name: "Website Optimization",
    img: "https://www.getfoundquick.com/wp-content/uploads/2024/07/shutterstock_2300796931.jpg",
    description: [
      "I enhance website performance by optimizing loading speeds, improving SEO, and implementing best practices in caching, lazy loading, and image optimization.",
      "A fast website improves user retention and boosts search engine rankings, ultimately driving more traffic and conversions.",
      "I conduct in-depth audits and fine-tune front-end code to maximize efficiency and ensure a seamless browsing experience.",
    ],
  },
  {
    id: 3,
    name: "Quality Assurance & Testing",
    img: "https://informationage-production.s3.amazonaws.com/uploads/2022/10/AdobeStock_271336215.jpeg",
    description: [
      "With my QA background, I perform thorough testing, including manual and automated testing, to ensure bug-free and smooth-running applications.",
      "I specialize in functional testing, regression testing, and UI/UX testing, ensuring the best experience for users.",
      "I work with tools like Jest, Cypress, Selenium, and Postman to maintain high standards in software quality.",
    ],
  },
  {
    id: 4,
    name: "API Integration & Testing",
    img: "https://miro.medium.com/v2/resize:fit:1024/0*UYYoWXaP2Jj2usBz.jpg",
    description: [
      "I integrate and test RESTful APIs to ensure seamless communication between front-end and back-end systems.",
      "I handle authentication, error handling, and data fetching while ensuring smooth functionality across various endpoints.",
      "I use tools like Postman and Swagger for API testing, ensuring secure and reliable API implementation.",
    ],
  },
];

const Services = () => {
  useEffect(() => {
    oridoUtilits.serviceHashtag();
  }, []);

  const [current, setCurrent] = useState(1);
  const { modalToggle, setServiceModal } = useContext(context);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      className="float-left clear-both w-full h-auto orido_tm_section"
      id="service"
    >
      <div className="orido_tm_service w-full h-auto clear-both float-left px-0 py-[120px] bg-[#E6E6FA] relative overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            className="w-40 h-40 bg-gradient-to-r from-[#E6E6FA] to-[#8380F1] rounded-full shadow-lg animate-float-delayed -right-20 top-30 opacity-30"
            animate={{
              x: [0, 20, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="w-64 h-64  bg-gradient-to-r from-[#8380F1] to-[#E6E6FA]] rounded-full shadow-lg animate-float-delayed absolute -right-20 bottom-40 opacity-20"
            animate={{
              x: [0, -30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        <div className="container relative">
          <motion.div
            className="float-left w-full orido_tm_main_title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={titleVariants}
          >
            <h3 className="tracking-[-2px] text-[56px] font-bold">
              <span className="relative">
                Services
                <motion.span
                  // className="absolute -bottom-2 left-0 h-1 "
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  viewport={{ once: true }}
                />
                <br />I Provide
              </span>
            </h3>
          </motion.div>

          <motion.div
            className="service_list w-full h-auto clear-both float-left mt-[100px] relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <ul className="relative z-[2]">
              {serviceData.map((service) => (
                <motion.li
                  key={service.id}
                  className={`${
                    current == service.id ? "current" : ""
                  } relative`}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.01,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="list_inner w-full flex items-center justify-between relative pt-[27px] pb-[26px] pl-[25px] pr-[35px]">
                    <div className="left w-[40%] flex">
                      <motion.span
                        className="number inline-block text-[#8380F1] text-[24px] font-dm transition-all duration-300"
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 0.3 },
                        }}
                      >
                        0{service.id}
                      </motion.span>
                      <h3 className="title text-[30px] font-medium pl-[30px] transition-all duration-300">
                        {service.name}
                      </h3>
                    </div>
                    <div className="right w-[60%] flex items-center justify-between">
                      <div className="text pr-[150px]">
                        <p className="transition-all duration-300">
                          {service.description[0].substring(0, 105)}...
                        </p>
                      </div>
                      <motion.div
                        className="arrow leading-[1]"
                        whileHover={{
                          scale: 1.2,
                          rotate: 45,
                          transition: { duration: 0.3 },
                        }}
                      >
                        <img
                          className="svg w-[25px] h-[25px] transition-all duration-300"
                          src="assets/img/svg/top-arrow.svg"
                          alt=""
                        />
                      </motion.div>
                    </div>
                    <a
                      className="orido_tm_full_link absolute inset-0 z-[5]"
                      href="#"
                      onClick={(e) => {
                        setCurrent(service.id);
                        e.preventDefault();
                        modalToggle(true);
                        setServiceModal(service);
                      }}
                    />
                    {/* Modalbox Info Start */}
                    <img
                      className="popup_service_image"
                      src="assets/img/service/1.jpg"
                      alt=""
                    />
                    {/* /Modalbox Info End */}
                  </div>

                  {/* Subtle hover effect */}
                  <motion.div
                    className="absolute inset-0 bg-white opacity-0 z-[1]"
                    initial={{ opacity: 0 }}
                    whileHover={{
                      opacity: 0.05,
                      transition: { duration: 0.3 },
                    }}
                  />
                </motion.li>
              ))}
            </ul>

            {/* Interactive background element */}
            <motion.div
              className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-[#8380F1]/20 opacity-30 blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <span className="ccc" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
