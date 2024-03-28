$(document).ready(function () {
  $(".sidenav").sidenav();
  $(".collapsible").collapsible();
  $(".carousel").carousel();
});

new Swiper("#swiper-1", {
  effect: "fade",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: "#swiper-1 .swiper-pagination",
    clickable: true,
  },
  lazyLoading: true,
  loop: true,
});


