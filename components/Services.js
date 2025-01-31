"use client";
import { context } from "@/context/context";
import { oridoUtilits } from "@/utility";
import { useContext, useEffect, useState } from "react";

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
  }
];


const Services = () => {
  useEffect(() => {
    oridoUtilits.serviceHashtag();
  }, []);
  const [current, setCurrent] = useState(1);
  const { modalToggle, setServiceModal } = useContext(context);
  return (
    <div
      className="float-left clear-both w-full h-auto orido_tm_section"
      id="service"
    >
      <div className="orido_tm_service w-full h-auto clear-both float-left px-0 py-[120px] bg-[#fafafb]">
        <div className="container">
          <div className="float-left w-full orido_tm_main_title">
            <h3 className="tracking-[-2px] text-[56px] font-bold">
              <span className="relative">
                Services
                <br />I Provide
              </span>
            </h3>
          </div>
          <div className="service_list w-full h-auto clear-both float-left mt-[100px] relative">
            <ul className="relative z-[2]">
              {serviceData.map((service) => (
                <li
                  className={`${
                    current == service.id ? "current" : ""
                  } relative`}
                >
                  <div className="list_inner w-full flex items-center justify-between relative pt-[27px] pb-[26px] pl-[25px] pr-[35px]">
                    <div className="left w-[40%] flex">
                      <span className="number inline-block text-[#6244C5] text-[24px] font-dm transition-all duration-300">
                        0{service.id}
                      </span>
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
                      <div className="arrow leading-[1]">
                        <img
                          className="svg w-[25px] h-[25px] transition-all duration-300"
                          src="assets/img/svg/top-arrow.svg"
                          alt
                        />
                      </div>
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
                      alt
                    />
                    {/* /Modalbox Info End */}
                  </div>
                </li>
              ))}
            </ul>
            <span className="ccc" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
