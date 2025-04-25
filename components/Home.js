const Home = ({ dark }) => {
  return (
    <div
      className="orido_tm_hero w-full min-h-[100vh] relative float-left"
      id="home"
    >
      <div className="container min-h-[100vh]">
        <div className="content min-h-[90vh] relative flex items-center justify-between">
          <div className="details w-1/2 pr-[50px]">
            <div className="short mb-[32px]">
              <h3 className="text-[60px] font-medium tracking-[-4px] mb-[11px]">
                Tanjina Sultana{" "}
                <img
                  className="svg w-[45px] h-[45px] relative left-[-7px]"
                  src="assets/img/svg/hi.svg"
                  alt
                />
              </h3>
              <span className="job inline-block relative text-[24px] pl-[97px] font-bold text-black px-2 rounded ">
                Frontend Developer
              </span>
            </div>
            <div className="text mb-[70px]">
              <p className="text-[16px] text-[#5A5A5A] leading-[26px] max-w-[400px]">
                I'm a passionate and detail-oriented developer based in Florida,
                dedicated to building seamless user experiences and ensuring
                high-quality software through rigorous testing.
              </p>
            </div>
            <div className="flex items-center buttons">
              <div className="orido_tm_boxed_button">
                <a className="anchor" href="#contact">
                  Say Hello{" "}
                  <img className="svg" src="assets/img/svg/send.svg" alt />
                </a>
              </div>
              <div className="orido_tm_simple_button">
                <a className="line_effect anchor" href="#portfolio">
                  My Works{" "}
                  <img className="svg" src="assets/img/svg/top-arrow.svg" alt />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="orido_tm_follow absolute bottom-[170px] flex items-center">
          <span className="text-[16px] font-medium">Follow me:</span>
          <ul className="flex items-center relative top-[5px] ml-[20px]">
            <li className="mr-[20px]">
              <a
                className="inline-block relative w-[60px] h-[60px] bg-gradient-to-r from-[#8380F1] to-[#E6E6FA] rounded-full transition-all duration-300"
                href="https://www.linkedin.com/in/tanjina-sultana-2719a7283/"
              >
                <img
                  className="svg absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] transition-all duration-300"
                  src="assets/img/svg/social/be.svg"
                  alt
                />
              </a>
            </li>
            <li className="mr-[20px]">
              <a
                className="inline-block relative w-[60px] h-[60px] bg-gradient-to-r from-[#8380F1] to-[#E6E6FA] rounded-full transition-all duration-300"
                href="https://github.com/Tanjina99"
              >
                <img
                  className="svg absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] transition-all duration-300"
                  src="assets/img/svg/social/dribbble.svg"
                  alt
                />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="orido_tm_down absolute left-[150px] bottom-[45px]">
        <a className="anchor" href="#about">
          <img
            className="svg"
            src={`assets/img/svg/${
              dark ? "down_button_light" : "down_button"
            }.svg`}
            alt
          />
        </a>
      </div>
      <div className="avatar absolute w-1/2 right-0 bottom-[-8px] flex justify-center items-center">
        <div className="relative inline-block img top-[-170px]">
          {" "}
          {/* Adjusted top position */}
          {/* Background glow effects */}
          <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-indigo-500/30 rounded-full blur-xl"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500/30 rounded-full blur-xl"></div>
          {/* Decorative outer ring with gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#8380F1] to-[#E6E6FA] rounded-full p-1 rotate-45 animate-spin-slow"></div>
          {/* Main image container */}
          <div className="relative rounded-full overflow-hidden border-8 border-white shadow-xl aspect-square flex justify-center items-center">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent z-10"></div>

            {/* Diagonal lines overlay */}
            <div
              className="absolute inset-0 bg-white/10 z-20"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(131, 128, 241, 0.1) 10px, rgba(131, 128, 241, 0.1) 20px)",
              }}
            ></div>

            {/* Image */}
            <img
              className="w-[500px] h-[500px] object-cover object-center"
              src="assets/img/hero/jina_pic.jpg"
              alt="Tanjina Sultana"
            />
          </div>
          {/* Decorative floating elements */}
          <div className="absolute -right-10 top-1/4 w-16 h-16 bg-gradient-to-r from-[#8380F1] to-[#E6E6FA] rounded-full shadow-lg animate-float"></div>
          <div className="absolute -left-10 bottom-1/4 w-12 h-12 bg-gradient-to-r from-[#E6E6FA] to-[#8380F1] rounded-full shadow-lg animate-float-delayed"></div>
          {/* Small decorative dots */}
          <div className="absolute -top-4 right-1/3 w-4 h-4 bg-indigo-500 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-4 left-1/3 w-4 h-4 bg-purple-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};
export default Home;
