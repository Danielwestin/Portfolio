import gsap from "gsap";

export function IntroAnimation() {
  const tl = gsap.timeline();

  tl.to(".introScreen-wrapper__column", {
    duration: 0.8,
    y: "-100%",
    stagger: 0.2,
    ease: "expo.inOut",
    delay: 2.5,
  })
    .to(
      ".introScreen-wrapper",
      {
        duration: 0.5,
        height: "0vh",
        ease: "expo.inOut",
      },
      "-=.4"
    )

    .to(
      ".introScreen-wrapper--h1",
      {
        duration: 0.5,
        opacity: 0,
      },
      "-=.4"
    );
  // .to(".introScreen-wrapper", {
  //   duration: 0.5,
  //   width: "20px",
  //   height: "20px",
  //   ease: "power3.out",
  //   borderRadius: "50%",
  //   right: "10px",
  //   top: "10px",
  // });
}
