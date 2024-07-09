$(document).ready(function () {
  // custom mouse pointer
  $("body").on("mousemove", function (n) {
    (e.style.left = n.clientX + "px"), (e.style.top = n.clientY + "px");
  });
  // custom mouse pointer on any cases
  var e = document.getElementById("pointer");
  $(document).mousemove(function (e) {
    let data = [
      {
        "pointer-large ,.swiper-pagination-bullet , .swiper-button-next , .swiper-button-prev":
          "large"
      },
      { "pointer-small": "small" }
    ];
    data.forEach((obj) => {
      for (const key in obj) {
        const value = obj[key];
        $(`.${key}`).on("mouseenter", () => add_Class(`${value}`));
        $(`.${key}`).on("mouseleave", () => remove_Class(`${value}`));
      }
    });
    function add_Class(className) {
      $(".pointer").addClass(className);
    }
    function remove_Class(className) {
      $(".pointer").removeClass(className);
    }
  });
  // animation overlay
  $(".animsition-overlay").animsition({
    inClass: "overlay-slide-in-right",
    outClass: "overlay-slide-out-right",
    inDuration: 1,
    outDuration: 1000,
    linkElement: ".animsition-link",
    loading: false,
    loadingParentElement: "body",
    loadingClass: "animsition-loading",
    loadingInner: "",
    timeout: false,
    timeoutCountdown: 100,
    onLoadEvent: true,
    browser: ["animation-duration", "-webkit-animation-duration"],
    overlay: true,
    overlayClass: "animsition-overlay-slide",
    overlayParentElement: "body",
    transition: function (url) {
      window.location.href = url;
    }
  });

  $("body").on("animsition.outStart", function () {
    $("body").removeClass("active");
    $("body").addClass("out");
  });

  $("body").on("animsition.inEnd", function () {
    $("body").addClass("active");
    $("body").addClass("in");
    setTimeout(function () {
      $("body").addClass("anim");
    }, 100);
  });

  // Navigation open/close
  $(".menu-open").on("click", function () {
    $(".menu-open, .nav-container").addClass("active");
  });

  $(".menu-close").on("click", function () {
    $(".menu-open, .nav-container").removeClass("active");
  });

  // ScrollAnimations
  $(
    "[data-animation]:not([data-animation-child]), [data-animation-container]"
  ).scrollAnimations();

  // Progress bar
  $(".progress-zero").each(function () {
    $(this)
      .find(".progress-full")
      .animate({
        width: $(this).attr("data-progress")
      });
  });
  // scroll to top
  let scrollBtn = document.querySelector(".to-top-btn");
  window.addEventListener("scroll", (_) => {
    if (scrollY >= 600) scrollBtn.classList.add("active");
    else scrollBtn.classList.remove("active");
  });
  scrollBtn.addEventListener("click", (_) => {
    scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
