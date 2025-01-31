const CopyRight = () => {
  return (
    <div className="orido_tm_section w-full h-auto clear-both float-left">
      <div className="orido_tm_copyright w-full h-auto clear-both float-left bg-[#FFC448] py-[25px] px-0">
        <div className="container">
          <div className="copyright_inner w-full h-auto clear-both flex items-center justify-between">
            <div className="logo">
              <img
                className="max-w-[170px] max-h-[80px]"
                src="assets/img/logo/logo.png"
                alt
              />
            </div>
            <div className="copy">
              <p className="text-main-color text-[16px] font-medium">
                © {new Date().getFullYear()} by{" "}
                <a
                  className="text-main-color"
                  href="https://themeforest.net/user/codeefly"
                  target="_blank"
                >
                  Codeefly.
                </a>{" "}
                All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CopyRight;
