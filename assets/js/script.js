// add padding top to show content behind navbar
$("body").css("padding-top", $(".navbar").outerHeight() + "px");

// detect scroll top or down
if ($(".smart-scroll").length > 0) {
  // check if element exists
  var last_scroll_top = 0;
  $(window).on("scroll", function () {
    scroll_top = $(this).scrollTop();
    if (scroll_top < last_scroll_top) {
      $(".smart-scroll").removeClass("scrolled-down").addClass("scrolled-up");
    } else {
      $(".smart-scroll").removeClass("scrolled-up").addClass("scrolled-down");
    }
    last_scroll_top = scroll_top;
  });
}

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".about-me",
    start: "center bottom",
  },
});

let techTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".tech-icons",
    start: "top bottom",
  },
});

let portfolioTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".port-header",
    start: "bottom bottom",
  },
});

let contactTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".contact-header",
    start: "top bottom",
  },
});

tl.from(".about-header", { x: 200, opacity: 0, duration: 1.5 })
  .from(
    ".about-text",
    {
      y: 300,
      opacity: 0,
      duration: 1,
    },
    "-=1"
  )
  .from(".my-pic", { x: 200, opacity: 0, duration: 1 }, "-=.5")
  .from(".brew", { y: 500, opacity: 0, duration: 1 }, "-=2");

techTl.from(".tech-header", { x: 200, opacity: 0, duration: 1.5 }).from(
  ".tech-icons",
  {
    y: 300,
    opacity: 0,
    duration: 1,
  },
  "-=.5"
);

portfolioTl
  .from(".port-header", { x: 200, opacity: 0, duration: 1.5 })
  .from(".port-body", { y: 300, opacity: 0, duration: 1 });

contactTl
  .from(".contact-header", { x: 200, opacity: 0, duration: 1.5 })
  .from(".contact-body", { y: 300, opacity: 0, duration: 1 }, "-=.5");
