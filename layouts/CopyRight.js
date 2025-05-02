const CopyRight = () => {
  return (
    <div className="orido_tm_section w-full h-auto clear-both float-left">
      <div className="orido_tm_copyright w-full h-auto clear-both float-left bg-[#E6E6FA] py-[25px] px-0">
        <div className="container flex justify-center">
          <div className="copy text-center">
            <p className="text-main-color text-[16px] font-medium">
              © {new Date().getFullYear()} by{" "}
              <a
                className="text-main-color"
                href="https://themeforest.net/user/codeefly"
                target="_blank"
              >
                Tanjina Sultana.
              </a>{" "}
              All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyRight;
