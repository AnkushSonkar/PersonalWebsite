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

  $("#skills-btn").click(function () {
    $(".skills-section").css("display", "block");
    $(".education-section").css("display", "none");
    $(".experience-section").css("display", "none");
  });

  $("#education-btn").click(function () {
    $(".education-section").css("display", "block");
    $(".skills-section").css("display", "none");
    $(".experience-section").css("display", "none");
  });

  $("#experience-btn").click(function () {
    $(".experience-section").css("display", "block");
    $(".education-section").css("display", "none");
    $(".skills-section").css("display", "none");
  });
});
