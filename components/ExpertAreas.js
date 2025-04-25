"use client";
import { oridoUtilits } from "@/utility";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const skills = [
  { id: 1, name: "JavaScript", value: "45", icon: "assets/img/svg/figma.svg" },
  {
    id: 2,
    name: "TypeScript",
    value: "40",
    icon: "assets/img/svg/typescript.svg",
  },
  { id: 3, name: "React Js", value: "60", icon: "assets/img/svg/Ae.svg" },
  { id: 4, name: "Next JS", value: "50", icon: "assets/img/svg/photoshop.svg" },
  { id: 5, name: "Express", value: "40", icon: "assets/img/svg/Xd.svg" },
  {
    id: 6,
    name: "MongoDB",
    value: "40",
    icon: "assets/img/svg/illustrator.svg",
  },
  { id: 7, name: "Tailwind", value: "55", icon: "assets/img/svg/Id.svg" },
  { id: 8, name: "Sass", value: "60", icon: "assets/img/svg/sass.svg" },
];

const experiences = [];

const educations = [
  {
    id: 1,
    institution: "Valencia College",
    certificate: "Computer Information Data Specialist",
    time: "2020",
  },
  {
    id: 2,
    institution: "Valencia College",
    certificate: "Computer Programming Specialist/Track",
    time: "2020",
  },
  {
    id: 3,
    institution: "Valencia College",
    certificate: "Computer Information Technology Specialist",
    time: "2020",
  },
  {
    id: 4,
    institution: "Valencia College",
    certificate: "Operations Support and Services",
    time: "2020",
  },
];

const tabMenu = [
  { id: 1, name: "Skills" },
  { id: 2, name: "Experience" },
  { id: 3, name: "Education" },
];

const ExpertAreas = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const activeContentTab = (value) => (activeTab == value ? "current" : "");

  useEffect(() => {
    oridoUtilits.filter_hashtag();
  }, [activeTab]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };

  const titleVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="float-left clear-both w-full h-auto orido_tm_section">
      <div className="orido_tm_informations w-full h-auto clear-both float-left mb-[125px]">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex w-full h-auto informations_inner"
          >
            {/* Left Section */}
            <div className="left w-1/2 pr-[100px]">
              <motion.div
                className="float-left w-full orido_tm_main_title"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={titleVariants}
              >
                <h3 className="tracking-[-2px] text-[56px] font-bold">
                  <span className="relative">
                    My expert
                    <motion.span
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      viewport={{ once: true }}
                    />
                    <br />
                    areas
                  </span>
                </h3>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="text w-full float-left mt-[30px] mb-[40px]"
              >
                <p className="mb-[35px]">
                  Frontend Developer | 2 Years Experience Skilled in React.js,
                  JavaScript, HTML, CSS (SCSS/Tailwind), and Redux, I build
                  responsive, high-performance web applications. Experienced in
                  API integration, UI/UX design, and state management, ensuring
                  seamless user experiences. Proficient in Next.js, Ant Design,
                  and modern UI libraries for scalable, dynamic applications.
                </p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="orido_tm_boxed_button"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a href="assets/img/cv/FarahNaz.docx" download>
                  My Resume{" "}
                  <img className="svg" src="assets/img/svg/paper.svg" alt="" />
                </a>
              </motion.div>
            </div>

            {/* Right Section */}
            <div className="right w-1/2 top-[33px] relative">
              <div className="relative float-left w-full filter">
                <ul>
                  {tabMenu.map((tab) => (
                    <motion.li
                      key={tab.id}
                      className="mr-[70px] inline-block"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <a
                        className={`${activeContentTab(
                          tab.id
                        )} text-main-color font-dm font-bold inline-block relative`}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveTab(tab.id);
                          setSelectedSkill(null);
                        }}
                      >
                        <span className="relative inline-block">
                          {tab.name}
                        </span>{" "}
                        <img
                          className="svg w-[24px] h-[24px] relative ml-[6px]"
                          src="assets/img/svg/top-arrow.svg"
                          alt=""
                        />
                      </a>
                    </motion.li>
                  ))}
                </ul>
                <span className="ccc" />
              </div>

              {/* Content Area */}
              <div className="float-left w-full content">
                {/* Skills Tab */}
                <motion.div
                  id="tab_1"
                  className={`wrapper ${activeContentTab(
                    1
                  )} w-full h-auto clear-both float-left`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeTab === 1 ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="skillbox w-full float-left mt-[110px]">
                    <motion.ul
                      className="ml-[-20px]"
                      variants={containerVariants}
                    >
                      {skills.map((skill) => (
                        <motion.li
                          key={skill.id}
                          className="mb-[45px] w-1/3 float-left pl-[20px]"
                          variants={itemVariants}
                          whileHover={{
                            scale: 1.05,
                            transition: { type: "spring", stiffness: 300 },
                          }}
                          onClick={() =>
                            setSelectedSkill(
                              skill.id === selectedSkill ? null : skill.id
                            )
                          }
                        >
                          <div className="relative float-left clear-both w-full h-auto list_inner cursor-pointer">
                            <span className="icon w-[40px] h-[40px] rounded-full bg-main-color inline-block relative mb-[3px]">
                              <span className="in w-[25px] h-[25px] inline-block absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] bg-white rounded-[6px]">
                                <img
                                  className="svg absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] z-[1] w-[16px] h-[16px]"
                                  src={skill.icon}
                                  alt=""
                                />
                              </span>
                            </span>
                            <p className="text-black name font-dm">
                              {skill.name}{" "}
                              <span className="font-bold">
                                ({skill.value}%)
                              </span>
                            </p>

                            {/* Skill progress bar - shows when selected */}
                            {selectedSkill === skill.id && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                className="mt-2"
                              >
                                <div className="w-full bg-gray-200 h-2 rounded-full">
                                  <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${skill.value}%` }}
                                    transition={{
                                      duration: 0.8,
                                      ease: "easeOut",
                                    }}
                                    className="bg-main-color h-2 rounded-full"
                                  />
                                </div>
                              </motion.div>
                            )}
                          </div>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </motion.div>

                {/* Experience Tab */}
                <motion.div
                  id="tab_2"
                  className={`wrapper ${activeContentTab(
                    2
                  )} w-full h-auto clear-both float-left`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeTab === 2 ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="timelinebox w-full float-left mt-[100px]">
                    {experiences.length > 0 ? (
                      <ul className="ml-[-20px]">
                        {experiences.map((experience) => (
                          <motion.li
                            key={experience.id}
                            className="mb-[37px] w-1/2 float-left pl-[20px]"
                            variants={itemVariants}
                          >
                            <div className="relative float-left clear-both w-full h-auto list_inner">
                              <div className="time w-full float-left mb-[25px]">
                                <span className="year text-[#8380F1] block mb-[2px]">
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
                          </motion.li>
                        ))}
                      </ul>
                    ) : (
                      <motion.div
                        variants={itemVariants}
                        className="text-center p-8 bg-gray-50 rounded-lg"
                      >
                        <p className="text-gray-500">
                          Currently updating my experience section. Check back
                          soon!
                        </p>
                      </motion.div>
                    )}
                  </div>
                </motion.div>

                {/* Education Tab */}
                <motion.div
                  id="tab_3"
                  className={`wrapper ${activeContentTab(
                    3
                  )} w-full h-auto clear-both float-left`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeTab === 3 ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="timelinebox w-full float-left mt-[100px]">
                    <motion.ul
                      className="ml-[-20px]"
                      variants={containerVariants}
                    >
                      {educations.map((education) => (
                        <motion.li
                          key={education.id}
                          className="mb-[37px] w-1/2 float-left pl-[20px]"
                          variants={itemVariants}
                          whileHover={{
                            scale: 1.02,
                            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.05)",
                          }}
                        >
                          <div className="relative float-left clear-both w-full h-auto list_inner p-4 rounded-lg border border-transparent hover:border-gray-200">
                            <div className="time w-full float-left mb-[25px]">
                              <span className="year text-[#8380F1] block mb-[2px]">
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
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ExpertAreas;
