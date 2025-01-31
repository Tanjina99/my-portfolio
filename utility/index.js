function currentLinkService(ccc, e) {
  if (!e) {
    return false;
  }

  var topOff = e.getBoundingClientRect().top;
  var height = e.offsetHeight;
  var menuTop = document
    .querySelector(".orido_tm_service .service_list")
    .getBoundingClientRect().top;

  e.closest("li").classList.remove("mleave");
  var siblings = e.closest("li").parentNode.children;
  Array.from(siblings).forEach(function (sibling) {
    if (sibling !== e.closest("li")) {
      sibling.classList.add("mleave");
    }
  });

  Array.from(ccc).forEach(function (item) {
    item.style.top = topOff - menuTop + "px";
    item.style.height = height + "px";
  });
}

function currentLink(ccc, e) {
  "use strict";

  if (!e) {
    return false;
  }

  var left = e.getBoundingClientRect().left;
  var width = e.offsetWidth;
  var menuLeft = document
    .querySelector(".orido_tm_header .menu")
    .getBoundingClientRect().left;

  Array.from(ccc).forEach(function (item) {
    item.style.left = left - menuLeft + "px";
    item.style.width = width + "px";
  });
}

function currentLink2(ccc, e) {
  if (!e) {
    return false;
  }
  var left = e.offsetLeft;
  var width = e.offsetWidth;
  ccc.style.left = left + "px";
  ccc.style.width = width + "px";
}

const hashtag = () => {
  const ccc = document.querySelector(".orido_tm_header .menu .ccc");
  const current = document.querySelector(".orido_tm_header .menu .current a");
  currentLink2(ccc, current);
};

function currentLinkFilter(ccc, e) {
  if (!e) {
    return false;
  }
  var left = e.offsetLeft;
  var width = e.offsetWidth + 80;
  var menuleft = document.querySelector(
    ".orido_tm_informations .right .filter"
  ).offsetLeft;
  ccc.style.left = left - menuleft - 40 + "px";
  ccc.style.width = width + "px";
  // ccc.css({ left: left - menuleft - 40 + "px", width: width + "px" });
}

export const oridoUtilits = {
  dataImage() {
    let d = document.querySelectorAll("[data-img-url");
    for (let i = 0; i < d.length; i++) {
      const element = d[i];
      element.style.backgroundImage = `url(${element.getAttribute(
        "data-img-url"
      )})`;
    }
  },
  preloader() {
    let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
      navigator.userAgent
    )
      ? true
      : false;
    let preloader = document.getElementById("preloader");

    if (preloader) {
      if (!isMobile) {
        setTimeout(function () {
          preloader.classList.add("preloaded");
        }, 800);
        setTimeout(function () {
          preloader.remove();
        }, 2000);
      } else {
        preloader.remove();
      }
    }

    setTimeout(() => {
      document.querySelector("body").classList.add("opened");
    }, 3000);

    var speed = 1000;

    setTimeout(function () {
      var preloader = document.querySelector(".waxon_tm_preloader");
      if (preloader) {
        preloader.classList.add("loaded");
      }
    }, speed);
  },
  imgToSVG() {
    document.querySelectorAll("img.svg").forEach((el) => {
      const imgID = el.getAttribute("id");
      const imgClass = el.getAttribute("class");
      const imgURL = el.getAttribute("src");

      fetch(imgURL)
        .then((data) => data.text())
        .then((response) => {
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(response, "text/html");
          let svg = xmlDoc.querySelector("svg");

          if (typeof imgID !== "undefined") {
            svg.setAttribute("id", imgID);
          }

          if (typeof imgClass !== "undefined") {
            svg.setAttribute("class", imgClass + " replaced-svg");
          }

          svg.removeAttribute("xmlns:a");
          if (el.parentNode) {
            el.parentNode.replaceChild(svg, el);
          }
        });
    });
  },
  serviceHashtag() {
    var ccc = document.querySelectorAll(".orido_tm_service .ccc");
    var element = document.querySelector(".orido_tm_service .current");
    var serviceListItems = document.querySelectorAll(
      ".orido_tm_service .service_list ul li"
    );

    serviceListItems.forEach(function (item) {
      item.addEventListener("mouseenter", function () {
        var e = item;
        currentLinkService(ccc, e);
      });
    });

    var serviceList = document.querySelector(".orido_tm_service .service_list");
    serviceList.addEventListener("mouseleave", function () {
      element = document.querySelector(".orido_tm_service .current");
      currentLinkService(ccc, element);
      var siblings = element.closest("li").parentNode.children;
      Array.from(siblings).forEach(function (sibling) {
        if (sibling !== element.closest("li")) {
          sibling.classList.remove("mleave");
        }
      });
    });

    currentLinkService(ccc, element);
  },
  stickyNav() {
    let offset = window.scrollY;
    const stickys = document.querySelectorAll(".orido_tm_header");
    stickys.forEach((sticky) => {
      if (sticky) {
        if (offset > 100) {
          sticky.classList.add("animate");
        } else {
          sticky.classList.remove("animate");
        }
      }
    });
  },
  scrollSection() {
    var ccc = document.querySelectorAll(".orido_tm_header .menu .ccc");
    var element = document.querySelector(".orido_tm_header .menu .current a");
    var menuLinks = document.querySelectorAll(".orido_tm_header .menu a");

    menuLinks.forEach(function (item) {
      item.addEventListener("mouseenter", function () {
        var e = item;
        currentLink(ccc, e);
      });
    });

    var menu = document.querySelector(".orido_tm_header .menu");
    menu.addEventListener("mouseleave", function () {
      element = document.querySelector(".orido_tm_header .menu .current a");
      currentLink(ccc, element);
    });
    currentLink(ccc, element);
  },
  sectionScroll() {
    const sections = document.querySelectorAll(".orido_tm_section");
    const navLi = document.querySelectorAll(".anchor_nav li");
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navLi.forEach((li) => {
      if (current !== null) {
        li.classList.remove("current");
      }
      if (
        li.getElementsByTagName("a")[0].getAttribute("href") == `#${current}`
      ) {
        li.classList.add("current");
      }
    });

    hashtag();
  },
  filter_hashtag() {
    const ccc = document.querySelector(
      ".orido_tm_informations .right .filter .ccc"
    );
    const current = document.querySelector(
      ".orido_tm_informations .right .filter .current"
    );
    const a = document.querySelectorAll(
      ".orido_tm_informations .right .filter a"
    );
    const filter = document.querySelector(
      ".orido_tm_informations .right .filter"
    );
    a.forEach((e) => {
      e.addEventListener("mouseenter", () => {
        currentLinkFilter(ccc, e);
      });
    });
    filter.addEventListener("mouseleave", () => {
      currentLinkFilter(ccc, current);
    });
    currentLinkFilter(ccc, current);
  },
  customCursor() {
    var myCursor = document.querySelectorAll(".mouse-cursor"),
      hamburger = document.querySelector(".hamburger"),
      kura_tm_topbar = document.querySelector(".kura_tm_topbar "),
      pointer = document.querySelector(".cursor-pointer"),
      e = document.querySelector(".cursor-inner"),
      t = document.querySelector(".cursor-outer");

    function mouseEvent(element) {
      element.addEventListener("mouseenter", function () {
        e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
      });
      element.addEventListener("mouseleave", function () {
        e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover");
      });
    }

    if (myCursor.length) {
      if (document.body) {
        let n,
          i = 0,
          o = !1;
        (window.onmousemove = function (s) {
          // console.log(document.querySelector(this));
          o ||
            (t.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (e.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (n = s.clientY),
            (i = s.clientX);
        }),
          document.body.addEventListener(
            "mouseenter",
            // "a,.kura_tm_topbar .trigger, .cursor-pointer",
            function () {
              let a = document.querySelectorAll("a");
              e.classList.add("cursor-inner"), t.classList.add("cursor-outer");

              for (let i = 0; i < a.length; i++) {
                const element = a[i];
                mouseEvent(element);
              }

              hamburger && mouseEvent(hamburger);
              kura_tm_topbar && mouseEvent(kura_tm_topbar);
              pointer && mouseEvent(pointer);
            }
          ),
          (e.style.visibility = "visible"),
          (t.style.visibility = "visible");
      }
    }
  },
};
