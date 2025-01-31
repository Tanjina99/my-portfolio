const Feedback = ({ dark }) => {
  return (
    <div className="orido_tm_section w-full h-auto clear-both float-left">
      <div className="orido_tm_testimonials w-full h-auto clear-both float-left bg-[#fafafb] px-0 py-[120px]">
        <div className="container">
          <div className="orido_tm_main_title w-full float-left">
            <h3 className="tracking-[-2px] text-[56px] font-bold">
              <span className="relative">
                Valuable feedback
                <br />
                from my client
              </span>
            </h3>
          </div>
          <div className="testimonials_in w-full h-auto clear-both flex items-center pt-[75px]">
            <img
              className="max-h-[400px] max-w-[350px]"
              src={`assets/img/testimonials/${dark ? "2" : "1"}.jpg`}
              alt
            />
            <div className="info pl-[70px]">
              <div className="text w-full float-left mb-[40px]">
                <p className="text-[24px] font-medium leading-[36px] font-dm">
                  “Awesome website! Easy to use and edit, it has a lot of
                  options to design whatever you need, it is professional and
                  fun. I was very successful creating my profile using designer
                  which gave me unbelievable reach &amp; appreciation.”
                </p>
              </div>
              <div className="details w-full float-left pl-[41px]">
                <h3 className="name text-[24px] font-bold mb-[7px]">
                  <span className="relative inline-block">Albert Walkers</span>
                </h3>
                <span className="job text-[19px] text-[#707070]">
                  Vivaco Group
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Feedback;
