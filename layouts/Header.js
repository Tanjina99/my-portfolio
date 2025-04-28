const Header = ({ dark }) => {
  return (
    <div className="orido_tm_header fixed top-0 left-0 right-0 z-[10] py-[25px] px-[150px] transition-all duration-300 middle:hidden">
      <div className="flex items-center justify-between w-full header_in">
        {/* <div className="">
          <img
            src="assets/img/mylogo/tslogo.jpg"
            alt="Logo"
            height="64px"
            width="64px"
            className="w-7 h-7 rounded-full"
          />
        </div> */}

        <div className="relative menu">
          <ul className="flex items-center anchor_nav">
            <li className="current mr-[50px]">
              <a className="text-[#5A5A5A]" href="#home">
                Home
              </a>
            </li>
            <li className="mr-[50px]">
              <a className="text-[#5A5A5A]" href="#about">
                About
              </a>
            </li>
            <li className="mr-[50px]">
              <a className="text-[#5A5A5A]" href="#service">
                Service
              </a>
            </li>
            <li className="mr-[50px]">
              <a className="text-[#5A5A5A]" href="#portfolio">
                Portfolio
              </a>
            </li>
            {/* <li className="mr-[50px]">
              <a className="text-[#5A5A5A]" href="#blog">
                Blog
              </a>
            </li> */}
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <span className="ccc" />
        </div>
        <div className="orido_tm_boxed_button">
          <a href="assets/img/cv/My_resume.pdf" download>
            <p className="flex">
              My Resume{" "}
              <img className="svg" src="assets/img/svg/paper.svg" alt />
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Header;
