"use client";
import { context } from "@/context/context";
import { useContext } from "react";

const blogData = [
  {
    id: 1,
    title: "Diversification of digital marketing stategies",
    date: "02 June, 2022",
    author: "John Smith",
    img: "assets/img/news/1.jpg",
    description: [
      "Orido is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Orido, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
  },
  {
    id: 2,
    title: "Diversification of digital marketing stategies",
    date: "02 June, 2022",
    author: "John Smith",
    img: "assets/img/news/2.jpg",
    description: [
      "Orido is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Orido, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
  },
  {
    id: 3,
    title: "Diversification of digital marketing stategies",
    date: "02 June, 2022",
    author: "John Smith",
    img: "assets/img/news/3.jpg",
    description: [
      "Orido is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Orido, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
  },
  {
    id: 4,
    title: "Diversification of digital marketing stategies",
    date: "02 June, 2022",
    author: "John Smith",
    img: "assets/img/news/4.jpg",
    description: [
      "Orido is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Orido, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
  },
];
const Blog = () => {
  const { modalToggle, setBlogModal } = useContext(context);

  return (
    <div
      className="orido_tm_section w-full h-auto clear-both float-left"
      id="blog"
    >
      <div className="orido_tm_news w-full h-auto clear-both float-left pt-[120px]">
        <div className="container">
          <div className="orido_tm_main_title w-full float-left">
            <h3 className="tracking-[-2px] text-[56px] font-bold">
              <span className="relative">
                From my
                <br />
                blog post
              </span>
            </h3>
          </div>
          <div className="news_list w-full h-auto clear-both float-left mt-[100px]">
            <ul className="ml-[-30px]">
              {blogData.map((blog) => (
                <li
                  key={blog.id}
                  className="mb-[30px] float-left pl-[30px] w-1/2"
                >
                  <div className="list_inner w-full h-auto clear-both float-left relative flex items-center bg-[rgba(255,246,217,.4)] py-[20px] pr-[20px] pl-[30px]">
                    <div className="left w-1/2 relative z-[1] pr-[10px]">
                      <div className="metabox w-full float-left mb-[10px]">
                        <ul>
                          <li className="mr-[15px] inline-block">
                            <span className="text-[16px] relative pl-[10px]">
                              <a
                                className="text-main-color transition-all duration-300"
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                  modalToggle(true);
                                  setBlogModal(blog);
                                }}
                              >
                                {blog.author}
                              </a>
                            </span>
                          </li>
                          <li className="inline-block">
                            <span className="text-[16px] relative pl-[10px]">
                              {blog.date}
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="title w-full float-left mb-[43px]">
                        <h3 className="leading-[.9]">
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              modalToggle(true);
                              setBlogModal(blog);
                            }}
                          >
                            {blog.title}
                          </a>
                        </h3>
                      </div>
                      <div className="orido_tm_simple_button">
                        <a
                          className="line_effect"
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            modalToggle(true);
                            setBlogModal(blog);
                          }}
                        >
                          Read More{" "}
                          <img
                            className="svg"
                            src="assets/img/svg/top-arrow.svg"
                            alt
                          />
                        </a>
                      </div>
                    </div>
                    <div className="right w-1/2 relative z-[1] overflow-hidden">
                      <img
                        className="relative opacity-0 min-w-full"
                        src="assets/img/thumbs/24-20.jpg"
                        alt
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url={blog.img}
                      />
                      <a
                        className="orido_tm_full_link absolute inset-0 z-[5]"
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          modalToggle(true);
                          setBlogModal(blog);
                        }}
                      />
                    </div>
                    <span className="shape absolute top-0 right-0 bottom-0">
                      <img
                        className="svg w-full h-full"
                        src="assets/img/svg/Intersect.svg"
                        alt
                      />
                    </span>
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
export default Blog;
