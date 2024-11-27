function djwd(){
    gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
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
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
djwd();

function imagesSwiper(){
  let containerImage1 = document.querySelector("#container-images #container-1");
  gsap.from(containerImage1,{
    transform:"translateY(-1000px)",
    duration:1.25,
    opacity:0,
  },"anim")

  let containerImage2 = document.querySelector("#container-images #container-2");
  gsap.from(containerImage2,{
    transform:"translateY(800px)",
    duration:1.25,
    opacity:0,
  },"anim")

  let containerImage3 = document.querySelector("#container-images #container-3");
  gsap.from(containerImage3,{
    transform:"translateY(-1000px)",
    duration:1.25,
    opacity:0,
  },"anim")

  let containerImage4 = document.querySelector("#container-images #container-4");
  gsap.from(containerImage4,{
    transform:"translateY(800px)",
    duration:1.25,
    opacity:0,
  },"anim")

}
imagesSwiper();

function paraAnimation(){
  let para = document.querySelectorAll("#para p");
  gsap.from("#para p", {
    y: 120,
    opacity: 0,
    stagger: 0.3,
    duration: 1.2,
    scrollTrigger: {
      trigger: "#page-2",
      scroller: "#main",
      // markers: true,
      start: "top 27%",
      end: "top 15%",
      scrub: 3,
    },
  });
}
paraAnimation();

function footerPartAnimation() {
  let footer1 = document.querySelectorAll("#footer-part-2 span");
  gsap.to(footer1, {
    transform: "translateY(0)",
    opacity: 1,
    duration: 1.25,
    stagger: 0.33,
    scrollTrigger: {
      trigger: "#footer-part-2",
      scroller: "#main",
      // markers:true,
      start: "top 55%",
      end: "top 50%",
      scrub: 2,
    },
  });
}
footerPartAnimation();

