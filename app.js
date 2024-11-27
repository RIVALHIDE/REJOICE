function init() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
init();
function spanAnimation() {
  let loader_h2 = document.querySelectorAll("#loader-page-anim h2");
  let loader = document.querySelectorAll("#loader-page-anim");
  let re = document.querySelectorAll("#re span");
  let crsr = document.querySelector("#cursor-anim");
  let headings = document.querySelectorAll("#headings h1");
  let tl = gsap.timeline();
  tl.from(loader_h2, {
    transform: "translateX(700px)",
    opacity: 0,
    duration: 1,
    delay: 0.9,
    stagger: 0.25,
  });
  tl.to(loader_h2, {
    transform: "translateX(-500px)",
    opacity: 0,
    duration: 1,
    stagger: 0.25,
  });
  tl.to(loader, {
    opacity: 0,
    duration: 0.3,
  });
  tl.from(
    re,
    {
      y: 300,
      duration: 0.6,
      opacity: 0,
      stagger: 0.15,
    },
    "anim"
  );
  tl.from(
    headings,
    {
      y: -200,
      duration: 0.6,
      opacity: 0,
    },
    "anim"
  );

  // loader.style.zIndex="9";
  // crsr.style.zIndex="999";
}
spanAnimation();
function page2ContentsAnimation() {
  let para = document.querySelectorAll("#para p");
  gsap.from("#para p", {
    y: 120,
    opacity: 0,
    stagger: 0.3,
    duration: 1.2,
    scrollTrigger: {
      trigger: "#page-2",
      scroller: ".main",
      // markers: true,
      start: "top 27%",
      end: "top 15%",
      scrub: 3,
    },
  });
  gsap.from("#brand-sec h1", {
    y: 100,
    opacity: 0,
    duration: 1.6,
    scrollTrigger: {
      trigger: "#page-2",
      scroller: ".main",
      // markers: true,
      start: "top 40%",
      end: "top 38%",
      scrub: 3,
    },
  });
}
page2ContentsAnimation();
function page3ContentsAnimation() {
  let explore_div = document.querySelectorAll("#exlplore-tag h1");

  gsap.from(explore_div, {
    y: 120,
    duration: 1.6,
    delay: 0.2,
    opacity: 0,
    stagger: 0.4,
    scrollTrigger: {
      trigger: "#para",
      scroller: ".main",
      // markers:true,
      start: "top -25%",
      scrub: 2,
    },
  });
}
page3ContentsAnimation();

function page4ContentsAnimation() {
  let paragraphContent = document.querySelector("#paragraph-div");
  let para = document.querySelectorAll("#paragraph-div p");

  gsap.from(para, {
    y: 100,
    opacity: 0,
    duration: 1.2,
    stagger: 0.3,
    scrollTrigger: {
      trigger: "#page-4",
      scroller: ".main",
      // markers:true,
      start: "top 35%",
      end: "top 28%",
      scrub: 4,
    },
  });
}
page4ContentsAnimation();

function page5VideoContentsAnimation() {
  let video = document.querySelector("#circle-cursor-div");
  let page5 = document.querySelector("#page-5 video");
  let ppp = document.querySelector("#page-5");

  ppp.addEventListener("mouseenter", function (dets) {
    video.style.opacity = 1;
    ppp.addEventListener("mousemove", function () {
      video.style.left = dets.x + "px";
      video.style.top = dets.y + "px";
    });
  });
  ppp.addEventListener("mouseleave", function () {
    video.style.opacity = 0;
  });
}
page5VideoContentsAnimation();

function page6ContentsAnimation() {
  let p123 = document.querySelector("#page-6 #paragraph-div123");
  let para123 = document.querySelectorAll("#page-6 #paragraph-div123 p");

  gsap.from(para123, {
    y: 100,
    opacity: 0,
    duration: 1.2,
    stagger: 0.3,
    scrollTrigger: {
      trigger: "#page-6",
      scroller: ".main",
      // markers:true,
      start: "top 35%",
      end: "top 28%",
      scrub: 4,
    },
  });
}
page6ContentsAnimation();

function footerPartAnimation() {
  let footer1 = document.querySelectorAll("#footer-part-2 span");
  gsap.to(footer1, {
    transform: "translateY(0)",
    opacity: 1,
    duration: 1.25,
    stagger: 0.33,
    scrollTrigger: {
      trigger: "#footer-part-2",
      scroller: ".main",
      // markers:true,
      start: "top 55%",
      end: "top 50%",
      scrub: 2,
    },
  });
}
footerPartAnimation();

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 800,
    disableOnInteraction: true,
  },
});

let dwj = document.querySelector("#navbar-sections");
let hxe = document.querySelector("#video-part-div");

dwj.addEventListener("click", function () {
  dwj.style.display="block";
  // alert("hcuhewdh")
  // hxe.style.transform="translateX(0px)";
  gsap.to(hxe, {
    transform: "translateX(0px)",
    opacity: 1,
    duration: 1.2,
  });
});

hxe.addEventListener("click", function () {
  gsap.to(hxe, {
    transform: "translateX(-1600px)",
    opacity: 0,
    duration: 1.2,
  });
});

let gg = document.querySelector("#page-5");
let jj = document.querySelector("#page-5 video");
gsap.to(jj, {
  height: 600,
  width: 960,
  duration: 1.5,
  scrollTrigger: {
    trigger: "#last-para",
    scroller: ".main",
    // markers:true,
    start: "top 25%",
    end: "top 20%",
    scrub: 2,
  },
});

let yeda = document.querySelector("#yeda-zava-cursor");
dwj.addEventListener("mouseenter", function () {
  yeda.style.opacity = 1;
  dwj.addEventListener("mousemove", function (dets) {
    yeda.style.left = dets.x + "px";
    yeda.style.top = dets.y + "px";
  });
});
dwj.addEventListener("mouseleave", function () {
  yeda.style.opacity = 0;
});
function menuContentsAnimation() {
  let h1 = document.querySelector("#d1-div #h1");
  let h2 = document.querySelector("#d1-div #h2");
  let h3 = document.querySelector("#d2-div #h3");
  let h4 = document.querySelector("#d2-div #h4");
  let h5 = document.querySelector("#d3-div #h5");
  let h6 = document.querySelector("#d3-div #h6");
  let h7 = document.querySelector("#d4-div #h7");
  let h8 = document.querySelector("#d4-div #h8");
  let d1 = document.querySelector("#d1-div");
  let d2 = document.querySelector("#d2-div");
  let d3 = document.querySelector("#d3-div");
  let d4 = document.querySelector("#d4-div");
  d1.addEventListener("mouseenter", function () {
    gsap.to(h1, {
      y: -170,
      opacity: 0,
      duration: 0.2,
    });
    gsap.to(h2, {
      y: -70,
      opacity: 1,
      duration: 0.2,
    });
  });

  d1.addEventListener("mouseleave", function () {
    gsap.to(h1, {
      y: 0,
      opacity: 1,
      duration: 0.3,
    });
    gsap.to(h2, {
      y: 50,
      opacity: 0,
      duration: 0.3,
    });
  });
  d2.addEventListener("mouseenter", function () {
    gsap.to(h3, {
      y: -170,
      opacity: 0,
      duration: 0.2,
    });
    gsap.to(h4, {
      y: -70,
      opacity: 1,
      duration: 0.2,
    });
  });

  d2.addEventListener("mouseleave", function () {
    gsap.to(h3, {
      y: 0,
      opacity: 1,
      duration: 0.3,
    });
    gsap.to(h4, {
      y: 50,
      opacity: 0,
      duration: 0.3,
    });
  });
  d3.addEventListener("mouseenter", function () {
    gsap.to(h5, {
      y: -170,
      opacity: 0,
      duration: 0.2,
    });
    gsap.to(h6, {
      y: -70,
      opacity: 1,
      duration: 0.2,
    });
  });

  d3.addEventListener("mouseleave", function () {
    gsap.to(h5, {
      y: 0,
      opacity: 1,
      duration: 0.3,
    });
    gsap.to(h6, {
      y: 50,
      opacity: 0,
      duration: 0.3,
    });
  });
  d4.addEventListener("mouseenter", function () {
    gsap.to(h7, {
      y: -170,
      opacity: 0,
      duration: 0.2,
    });
    gsap.to(h8, {
      y: -70,
      opacity: 1,
      duration: 0.2,
    });
  });

  d4.addEventListener("mouseleave", function () {
    gsap.to(h7, {
      y: 0,
      opacity: 1,
      duration: 0.3,
    });
    gsap.to(h8, {
      y: 50,
      opacity: 0,
      duration: 0.3,
    });
  });
}
menuContentsAnimation();

let menu = document.querySelector("#menu");
let menuDiv = document.querySelector("#menu-sections-div");
let close = document.querySelector("#section-3 h2");
menu.addEventListener("click",function(){
  hxe.style.display="none";
  gsap.to(menuDiv,{
    y:0,
    opacity:1,
    duartion:1.2,
  })
})
close.addEventListener("click",function(){
  gsap.to(menuDiv,{
    y:-1000,
    opacity:0,
    duration:1.2,
  })
})
