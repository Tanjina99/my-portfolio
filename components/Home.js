const Home = ({ dark }) => {
  return (
    <div
      className="orido_tm_hero w-full min-h-[100vh] relative float-left"
      id="home"
    >
      <div className="container min-h-[100vh]">
        <div className="content min-h-[100vh] relative flex items-center justify-between">
          <div className="details w-1/2 pr-[50px]">
            <div className="short mb-[32px]">
              <h3 className="text-[80px] font-medium tracking-[-4px] mb-[11px]">
                Farah Naz{" "}
                <img
                  className="svg w-[45px] h-[45px] relative left-[-7px]"
                  src="assets/img/svg/hi.svg"
                  alt
                />
              </h3>
              <span className="job inline-block relative text-[24px] pl-[97px]">
                Frontend Developer and QA Engineer
              </span>
            </div>
            <div className="text mb-[70px]">
              <p className="text-[16px] text-[#5A5A5A] leading-[26px] max-w-[400px]">
              I'm a passionate and detail-oriented developer based in New York, dedicated to building seamless user experiences and ensuring high-quality software through rigorous testing.
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
        <div className="orido_tm_follow absolute bottom-[120px] flex items-center">
          <span className="text-[16px] font-medium">Follow me:</span>
          <ul className="flex items-center relative top-[5px] ml-[20px]">
            <li className="mr-[20px]">
              <a
                className="inline-block relative w-[100px] h-[100px] bg-[#F6F6F6] rounded-full transition-all duration-300"
                href="https://linkedin.com/in/farahnaz1292"
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
                className="inline-block relative w-[100px] h-[100px] bg-[#F6F6F6] rounded-full transition-all duration-300"
                href="https://github.com/FarahNaz1292"
              >
                <img
                  className="svg absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] transition-all duration-300"
                  src="assets/img/svg/social/dribbble.svg"
                  alt
                />
              </a>
            </li>
            <li>
              <a
                className="inline-block relative w-[100px] h-[100px] bg-[#F6F6F6] rounded-full transition-all duration-300"
                href="https://instagram.com/f_a_r_a_hnaz?igsh=czRlNGY5MWU5b3E0&utm_source=qr"
              >
                <img
                  className="svg absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] transition-all duration-300"
                  src="assets/img/svg/social/instagarm.svg"
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
      <div className="avatar absolute w-1/2 right-0 bottom-[-8px]">
        <div className="relative inline-block img">
          <img
            className="max-w-[700px] max-h-[760px]"
            src="assets/img/hero/farah_naz_pic.png"
            alt
          />
          {/* <div className="video_button">
            <a
              className="popup-youtube"
              href="https://www.youtube.com/watch?v=7e90gBu4pas"
            >
              <img
                className="anim_circle"
                src="assets/img/hero/welcome.png"
                alt
              />
              <img className="svg" src="assets/img/svg/play.svg" alt />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Home;
