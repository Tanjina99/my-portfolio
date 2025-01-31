"use client";
import { oridoUtilits } from "@/utility";
import { useEffect, useState } from "react";

const skills = [
  { id: 1, name: "JavaScript", value: "70", icon: "assets/img/svg/figma.svg" },
  { id: 2, name: "React Js", value: "80", icon: "assets/img/svg/Ae.svg" },
  {
    id: 3,
    name: "Next JS",
    value: "50",
    icon: "assets/img/svg/photoshop.svg",
  },
  { id: 4, name: "Express", value: "60", icon: "assets/img/svg/Xd.svg" },
  {
    id: 5,
    name: "MongoDB and Mongoose",
    value: "70",
    icon: "assets/img/svg/illustrator.svg",
  },
  { id: 6, name: "Tailwind", value: "75", icon: "assets/img/svg/Id.svg" },
];

const experiences = [
  {
    id: 1,
    company: "White Label E-commerce",
    designation: "QA Engineer",
    time: "2019 - 2021",
  },
  {
    id: 2,
    company: "Five Jars",
    designation: "Frontend Developer and QA engineer",
    time: "2021 - present",
  },
  // {
  //   id: 3,
  //   company: "Bauen Software Inc.",
  //   designation: "UI Designer",
  //   time: "2018 - 2020",
  // },
  // {
  //   id: 4,
  //   company: "Bauen Software Inc.",
  //   designation: "Web Designer",
  //   time: "2016 - 2018",
  // },
];

const educations = [
  // {
  //   id: 1,
  //   institution: "Stanford Univercity",
  //   certificate: "Web Design Course",
  //   time: "2021 - Present",
  // },
  // {
  //   id: 2,
  //   institution: "Art Univercity of New York",
  //   certificate: "Art Director Course",
  //   time: "2020 - 2021",
  // },
  // {
  //   id: 3,
  //   institution: "Amazon College",
  //   certificate: "IOS Development",
  //   time: "2018 - 2020",
  // },
  // {
  //   id: 4,
  //   institution: "Univercity of Texas",
  //   certificate: "UX Expert",
  //   time: "2017 - 2018",
  // },
];

const tabMenu = [
  { id: 1, name: "Skills" },
  { id: 2, name: "Experience" },
  { id: 3, name: "Education" },
];

const ExpertAreas = () => {
  const [activeTab, setActiveTab] = useState(1);
  const activeContentTab = (value) => (activeTab == value ? "current" : "");
  useEffect(() => {
    oridoUtilits.filter_hashtag();
  }, [activeTab]);
  return (
    <div className="float-left clear-both w-full h-auto orido_tm_section">
      <div className="orido_tm_informations w-full h-auto clear-both float-left mb-[125px]">
        <div className="container">
          <div className="flex w-full h-auto informations_inner">
            <div className="left w-1/2 pr-[100px]">
              <div className="float-left w-full orido_tm_main_title">
                <h3 className="tracking-[-2px] text-[56px] font-bold">
                  <span className="relative">
                    My expert
                    <br />
                    areas
                  </span>
                </h3>
              </div>
              <div className="text w-full float-left mt-[30px] mb-[40px]">
                <p className="mb-[35px]">
                I am a former QA Engineer turned Frontend Developer with four years of experience, building dynamic and user-friendly web applications. My expertise includes React, JavaScript, TypeScript, HTML, CSS, and testing frameworks. With a strong eye for detail from my QA background, I ensure high-quality, responsive, and accessible designs. I am passionate about creating seamless user experiences and continuously improving my skills to stay updated with the latest technologies.
                </p>
              </div>
              <div className="orido_tm_boxed_button">
                <a href="assets/img/cv/FarahNaz.docx" download>
                  My Resume{" "}
                  <img className="svg" src="assets/img/svg/paper.svg" alt />
                </a>
              </div>
            </div>
            <div className="right w-1/2 top-[33px] relative">
              <div className="relative float-left w-full filter">
                <ul>
                  {tabMenu.map((tab) => (
                    <li className="mr-[70px] inline-block" key={tab.id}>
                      <a
                        className={`${activeContentTab(
                          tab.id
                        )} text-main-color font-dm font-bold inline-block relative`}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveTab(tab.id);
                        }}
                      >
                        <span className="relative inline-block">
                          {tab.name}
                        </span>{" "}
                        <img
                          className="svg w-[24px] h-[24px] relative ml-[6px]"
                          src="assets/img/svg/top-arrow.svg"
                          alt
                        />
                      </a>
                    </li>
                  ))}
                </ul>
                <span className="ccc" />
              </div>
              <div className="float-left w-full content">
                <div
                  id="tab_1"
                  className={`wrapper ${activeContentTab(
                    1
                  )} w-full h-auto clear-both float-left`}
                >
                  <div className="skillbox w-full float-left mt-[110px]">
                    <ul className="ml-[-20px]">
                      {skills.map((skill) => (
                        <li
                          key={skill.id}
                          className="mb-[45px] w-1/3 float-left pl-[20px]"
                        >
                          <div className="relative float-left clear-both w-full h-auto list_inner">
                            <span className="icon w-[40px] h-[40px] rounded-full bg-main-color inline-block relative mb-[3px]">
                              <span className="in w-[25px] h-[25px] inline-block absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] bg-white rounded-[6px]">
                                <img
                                  className="svg absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] z-[1] w-[16px] h-[16px]"
                                  src={skill.icon}
                                  alt
                                />
                              </span>
                            </span>
                            <p className="text-black name font-dm">
                              {skill.name}{" "}
                              <span className="font-bold">
                                ({skill.value}%)
                              </span>
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div
                  id="tab_2"
                  className={`wrapper ${activeContentTab(
                    2
                  )} w-full h-auto clear-both float-left`}
                >
                  <div className="timelinebox w-full float-left mt-[100px]">
                    <ul className="ml-[-20px]">
                      {experiences.map((experience) => (
                        <li
                          key={experience.id}
                          className="mb-[37px] w-1/2 float-left pl-[20px]"
                        >
                          <div className="relative float-left clear-both w-full h-auto list_inner">
                            <div className="time w-full float-left mb-[25px]">
                              <span className="year text-[#6244C5] block mb-[2px]">
                                {experience.time}
                              </span>
                              <span className="company">
                                {experience.company}
                              </span>
                            </div>
                            <div className="float-left w-full job">
                              <h3 className="text-[21px]">
                                <span className="relative inline-block">
                                  {experience.designation}
                                </span>
                              </h3>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div
                  id="tab_3"
                  className={`wrapper ${activeContentTab(
                    3
                  )} w-full h-auto clear-both float-left`}
                >
                  <div className="timelinebox w-full float-left mt-[100px]">
                    <ul className="ml-[-20px]">
                      {educations.map((education) => (
                        <li
                          key={education.id}
                          className="mb-[37px] w-1/2 float-left pl-[20px]"
                        >
                          <div className="relative float-left clear-both w-full h-auto list_inner">
                            <div className="time w-full float-left mb-[25px]">
                              <span className="year text-[#6244C5] block mb-[2px]">
                                {education.time}
                              </span>
                              <span className="company">
                                {education.institution}
                              </span>
                            </div>
                            <div className="float-left w-full job">
                              <h3 className="text-[21px]">
                                <span className="relative inline-block">
                                  {education.certificate}
                                </span>
                              </h3>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExpertAreas;
