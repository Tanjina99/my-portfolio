"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const titleVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div
      className="orido_tm_section w-full h-auto clear-both float-left"
      id="contact"
    >
      <div className="orido_tm_contact bg-[#8380F1] w-full h-auto clear-both float-left px-0 pt-[135px] pb-[120px] relative">
        <div className="container">
          <div className="w-full mb-10">
            <motion.div
              className="float-left w-full orido_tm_main_title"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={titleVariants}
            >
              <h3 className="tracking-[-2px] text-[56px] font-bold">
                <span className="relative inline-block text-white">
                  Let's
                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    viewport={{ once: true }}
                  />
                  <br />
                  work together
                </span>
              </h3>
            </motion.div>
            <div className="w-full text-center clear-both">
              <p className="mt-8 text-lg max-w-2xl mx-auto text-[rgba(255,255,255,.7)]">
                You can express yourself however you want and whenever you want,
                for free. You can customize a template or make your own.
              </p>
            </div>
          </div>

          {/* Contact Form Added Here */}
          <motion.div
            className="contact_form_wrapper w-full float-left mb-[100px]"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="contact_form w-full bg-white rounded-xl p-12 shadow-lg"
            >
              <div className="form_flex flex flex-wrap gap-6 mb-8">
                <div className="input_wrapper flex-1 min-w-[300px]">
                  <label className="block text-[#666] mb-2 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    placeholder="Your Name"
                    className="w-full h-14 border border-[#e5e5e5] rounded-lg px-5 outline-none focus:border-[#8380F1] transition-all duration-300"
                  />
                </div>
                <div className="input_wrapper flex-1 min-w-[300px]">
                  <label className="block text-[#666] mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    placeholder="Your Email"
                    className="w-full h-14 border border-[#e5e5e5] rounded-lg px-5 outline-none focus:border-[#8380F1] transition-all duration-300"
                  />
                </div>
              </div>
              <div className="input_wrapper w-full mb-8">
                <label className="block text-[#666] mb-2 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full h-14 border border-[#e5e5e5] rounded-lg px-5 outline-none focus:border-[#8380F1] transition-all duration-300"
                />
              </div>
              <div className="input_wrapper w-full mb-8">
                <label className="block text-[#666] mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  className="w-full h-40 border border-[#e5e5e5] rounded-lg p-5 outline-none focus:border-[#8380F1] transition-all duration-300 resize-none"
                ></textarea>
              </div>
              <motion.div
                className="orido_tm_button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <button
                  type="submit"
                  value="Send"
                  className="orido_tm_btn bg-[#8380F1] text-white font-medium h-14 px-10 rounded-lg hover:bg-[#6b68dd] transition-all duration-300 inline-flex items-center"
                >
                  Send Message
                  <img
                    className="svg ml-3"
                    src="assets/img/svg/send.svg"
                    alt=""
                  />
                </button>
              </motion.div>
            </form>
          </motion.div>

          <motion.div
            className="connect w-full flex items-center justify-between"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="left">
              <ul>
                <li className="mr-[50px] inline-block">
                  <span className="name block text-[rgba(255,255,255,.5)] text-[16px] mb-[10px]">
                    Call:
                  </span>
                  <p className="block text-white text-[36px] font-dm font-medium">
                    <a
                      className="line_effect text-white"
                      href="tel:+14078797464"
                    >
                      +1 (407)-879-7464
                    </a>
                  </p>
                </li>
                <li className="inline-block">
                  <span className="name block text-[rgba(255,255,255,.5)] text-[16px] mb-[10px]">
                    Email:
                  </span>
                  <p className="block text-white text-[36px] font-dm font-medium">
                    <a
                      className="line_effect text-white"
                      href="mailto:tanjina1997@yahoo.com"
                    >
                      tanjina1997@yahoo.com
                    </a>
                  </p>
                </li>
              </ul>
            </div>
            <div className="right">
              <div className="orido_tm_follow flex items-center">
                <span>Follow me:</span>
                <ul className="flex items-center relative top-[5px] ml-[20px]">
                  <motion.li className="mr-[20px]" whileHover={{ y: -5 }}>
                    <a
                      className="inline-block relative w-[56px] h-[56px] bg-[#f6f6f6] rounded-full transition-all duration-300 hover:bg-[#f0f0f0]"
                      href="#"
                    >
                      <img
                        className="svg absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] transition-all duration-300"
                        src="assets/img/svg/social/be.svg"
                        alt=""
                      />
                    </a>
                  </motion.li>
                  <motion.li className="mr-[20px]" whileHover={{ y: -5 }}>
                    <a
                      className="inline-block relative w-[56px] h-[56px] bg-[#f6f6f6] rounded-full transition-all duration-300 hover:bg-[#f0f0f0]"
                      href="#"
                    >
                      <img
                        className="svg absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] transition-all duration-300"
                        src="assets/img/svg/social/dribbble.svg"
                        alt=""
                      />
                    </a>
                  </motion.li>
                  {/* <motion.li whileHover={{ y: -5 }}>
                    <a
                      className="inline-block relative w-[56px] h-[56px] bg-[#f6f6f6] rounded-full transition-all duration-300 hover:bg-[#f0f0f0]"
                      href="#"
                    >
                      <img
                        className="svg absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] transition-all duration-300"
                        src="assets/img/svg/social/instagarm.svg"
                        alt=""
                      />
                    </a>
                  </motion.li> */}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
        <span className="element absolute bottom-[-60px] left-0">
          <img
            className="svg w-full h-full text-transparent"
            src="assets/img/svg/elements.svg"
            alt=""
          />
        </span>
        <span className="element2 absolute right-[200px] top-[150px]">
          <img
            className="svg w-full h-full text-transparent"
            src="assets/img/svg/element-2.svg"
            alt=""
          />
        </span>
      </div>
    </div>
  );
};

export default Contact;
