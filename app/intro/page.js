import Mouse from "@/layouts/Mouse";

const Intro = () => {
  return (
    <div
      className="orido_tm_all_wrap w-full float-left clear-both h-auto relative"
      data-magic-cursor="show"
    >
      <div className="orido_tm_intro">
        <div className="orido_tm_intro_fixed_price">
          <span className="anim" />
          <span className="anim" />
          <span className="anim" />
          <a
            href="https://themeforest.net/user/codeefly/portfolio"
            target="_blank"
            className="pricing-info anim"
          >
            Buy
          </a>
        </div>
        <div className="short_info">
          <img className="inline-block" src="assets/img/logo/logo.png" alt />
          <h3>Tailwind CSS Personal Portfolio React NextJS Template</h3>
        </div>
        <span className="intro_line" />
        <span className="intro_line_2" />
        <span className="intro_line_3" />
        <div className="demos">
          <div className="left">
            <div className="desc">
              <img src="assets/img/intro/1.png" alt />
              <h3 className="title">Light Demo</h3>
            </div>
            <a className="intro_link" href="/" target="_blank" />
          </div>
          <div className="right">
            <div className="desc">
              <img src="assets/img/intro/2.png" alt />
              <h3 className="title">Dark Demo</h3>
            </div>
            <a className="intro_link" href="/index-dark" target="_blank" />
          </div>
        </div>
      </div>
      {/* CURSOR */}
      <Mouse />
      {/* /CURSOR */}
    </div>
  );
};
export default Intro;
