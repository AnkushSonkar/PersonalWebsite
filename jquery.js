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
    // remove active-btn class from all buttons and active from skill button
    $(".button").removeClass("active");
    $(".button").removeClass("active-btn");

    // add active-btn class to button when its clicked
    $(this).addClass("active-btn");

    // hide all section
    $(".btn-content").hide();

    // show corresponding section using index number
    var index = $(this).index();
    $(".btn-content").eq(index).show();
  });
});
