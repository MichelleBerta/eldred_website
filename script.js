$(document).ready(function () {
  $(".sidenav").sidenav();
  $(".collapsible").collapsible();
  $(".carousel").carousel();
});

new Swiper("#swiper-1", {
  effect: "fade",
  pagination: {
    el: "#swiper-1 .swiper-pagination",
    clickable: true,
  },
});
