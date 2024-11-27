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

function page1ContentAniamtion() {
  let para = document.querySelector("#left-contents");
  let paragraph = document.querySelectorAll("#left-contents p");

  gsap.from(paragraph, {
    y: 100,
    opacity: 0,
    duration: 0.5,
    stagger: 0.12,
  });
}
page1ContentAniamtion();

function page2ImagesAnimation() {
  let page2 = document.querySelector("#page-2");
  gsap.to(
    "#image-1-div img",
    {
      opacity: 1,
      scrollTrigger: {
        trigger: "#right-contents",
        scroller: ".main",
        // markers:true,
        start: "top 15%",
        end: "top 10%",
        scrub: 2,
      },
    },
    "anim"
  );
  gsap.to(
    "#image-2-div img",
    {
      opacity: 1,
      scrollTrigger: {
        trigger: "#right-contents",
        scroller: ".main",
        // markers:true,
        start: "top 15%",
        end: "top 10%",
        scrub: 2,
      },
    },
    "anim"
  );
}

page2ImagesAnimation();

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