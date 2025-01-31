import OridoCounter from "./OridoCounter";

const counts = [
  { name: "Projects Completed", value: 35 },
  { name: "Years of Experience", value: 4 },
  { name: "Bugs Identified & Fixed", value: 500 },
  { name: "Test Cases Executed", value: 1200 },
];
const Counter = () => {
  return (
    <div className="float-left clear-both w-full h-auto orido_tm_section">
      <div className="orido_tm_counter w-full h-auto clear-both float-left mb-[92px]">
        <div className="container">
          <div className="float-left clear-both w-full h-auto counter_list">
            <ul className="ml-[-30px]">
              {counts.map((count) => (
                <li className="mb-[30px] float-left pl-[30px] w-1/4 text-center">
                  <div className="relative float-left clear-both w-full h-auto list_inner">
                    <h3 className="font-normal text-[64px] font-kaushan mb-[10px] relative z-[2]">
                      <OridoCounter end={count.value} />
                    </h3>
                    <span className="title relative z-[2]">{count.name}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Counter;
