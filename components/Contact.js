const Contact = () => {
  return (
    <div
      className="orido_tm_section w-full h-auto clear-both float-left"
      id="contact"
    >
      <div className="orido_tm_contact w-full h-auto clear-both float-left bg-main-color px-0 pt-[135px] pb-[120px] relative">
        <div className="container">
          <div className="infobox w-full float-left flex items-center justify-between mb-[116px]">
            <div className="video_button">
              <a
                className="popup-youtube"
                href="https://www.youtube.com/watch?v=7e90gBu4pas"
              >
                <img
                  className="anim_circle"
                  src="assets/img/contact/video.png"
                  alt
                />
                <img className="svg" src="assets/img/svg/play.svg" alt />
              </a>
            </div>
            <div className="text py-0 px-[115px]">
              <h3 className="font-bold text-[56px] tracking-[-2px] text-white mb-[25px]">
                Let's work together
              </h3>
              <p className="font-light leading-[32px] text-[rgba(255,255,255,.7)]">
                You can express yourself however you want and whenever you want,
                for free. You can customize a template or make your own.
              </p>
            </div>
            <div className="orido_tm_boxed_button">
              <a href="#">
                Say Hello{" "}
                <img className="svg" src="assets/img/svg/send.svg" alt />
              </a>
            </div>
          </div>
          <div className="connect w-full flex items-center justify-between">
            <div className="left">
              <ul>
                <li className="mr-[50px] inline-block">
                  <span className="name block text-[rgba(255,255,255,.5)] text-[16px] mb-[10px]">
                    Call:
                  </span>
                  <p className="block text-white text-[36px] font-dm font-medium">
                    <a className="line_effect text-white" href="#">
                      +1 (234) 567 890
                    </a>
                  </p>
                </li>
                <li className="inline-block">
                  <span className="name block text-[rgba(255,255,255,.5)] text-[16px] mb-[10px]">
                    Email:
                  </span>
                  <p className="block text-white text-[36px] font-dm font-medium">
                    <a className="line_effect text-white" href="#">
                      support@smith.com
                    </a>
                  </p>
                </li>
              </ul>
            </div>
            <div className="right">
              <div className="orido_tm_follow flex items-center">
                <span>Follow me:</span>
                <ul className="flex items-center relative top-[5px] ml-[20px]">
                  <li className="mr-[20px]">
                    <a
                      className="inline-block relative w-[56px] h-[56px] bg-[#f6f6f6] rounded-full transition-all duration-300"
                      href="#"
                    >
                      <img
                        className="svg absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] transition-all duration-300"
                        src="assets/img/svg/social/be.svg"
                        alt
                      />
                    </a>
                  </li>
                  <li className="mr-[20px]">
                    <a
                      className="inline-block relative w-[56px] h-[56px] bg-[#f6f6f6] rounded-full transition-all duration-300"
                      href="#"
                    >
                      <img
                        className="svg absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] transition-all duration-300"
                        src="assets/img/svg/social/dribbble.svg"
                        alt
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      className="inline-block relative w-[56px] h-[56px] bg-[#f6f6f6] rounded-full transition-all duration-300"
                      href="#"
                    >
                      <img
                        className="svg absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] transition-all duration-300"
                        src="assets/img/svg/social/instagarm.svg"
                        alt
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <span className="element absolute bottom-[-60px] left-0">
          <img
            className="svg w-full h-full text-transparent"
            src="assets/img/svg/elements.svg"
            alt
          />
        </span>
        <span className="element2 absolute right-[200px] top-[150px]">
          <img
            className="svg w-full h-full text-transparent"
            src="assets/img/svg/element-2.svg"
            alt
          />
        </span>
      </div>
    </div>
  );
};
export default Contact;
