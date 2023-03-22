$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: "1",
    loop: "true",
    nav: "true",
    dots: "true",
    autoplay: "true",
    autoplaySpeed: "3000",
    smartspeed: "1500",
    autoplayHoverPause: "true",
  });

  $(".about-buttons .button").click(function () {
    $(".button").removeClass("active-btn");
    $(this).addClass("active-btn");
  });
});
