const About = () => {
  return (
    <div
      className="float-left clear-both w-full h-auto orido_tm_section"
      id="about"
    >
      <div className="orido_tm_about w-full h-auto clear-both float-left bg-[#8380F1] px-0 pt-[180px] pb-[120px] mb-[120px]">
        <div className="about_in w-full h-auto max-w-[1070px] mx-auto my-0 flex items-center">
          <div className="left w-1/2 pr-[50px]">
            <div className="box about_text bg-[#E6E6FA] inline-block overflow-hidden pb-[85px] relative">
              <h3 className="year font-oswald tracking-[-4px] font-extrabold text-[395px] relative mr-[-30px] mt-[-95px] text-white leading-[1]">
                02
              </h3>
              <span className="experience text-[24px] pl-[50px] mt-[6px] inline-block">
                Years of Experience
              </span>
              <h3 className="name text-[80px] text-white font-bold tracking-[-4px] leading-[1] uppercase absolute bottom-[-30px] left-[-20px] w-[300%]">
                Tanjina Sultana
              </h3>
            </div>
          </div>
          <div className="relative w-1/2 right">
            <span className="element absolute top-0 right-full mr-[15px] mt-[-20px]">
              <img
                className="svg w-[80px] h-[80px] text-transparent"
                src="assets/img/svg/element.svg"
                alt
              />
            </span>
            <div className="orido_tm_main_title w-full float-left mb-[30px]">
              <h3 className="text-white tracking-[-2px] text-[56px] font-bold">
                <span className="relative">About Me</span>
              </h3>
            </div>
            <div className="text w-full float-left mb-[50px]">
              <p className="text-[rgba(255,255,255,.7)] font-light leading-[32px]">
                I'm a Creative Frontend Developer who loves turning ideas into
                beautiful, high-performance web applications with React.js and
                Next.js. I’m passionate about crafting responsive, SEO-friendly
                interfaces that feel smooth, intuitive, and engaging. With a
                strong eye for design and a deep understanding of modern
                development, I focus on building scalable, elegant solutions
                that not only look great but also deliver an exceptional user
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
