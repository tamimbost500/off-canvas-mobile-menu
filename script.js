// Start Mobile Menu
$(".menu-bar a").on("click", function () {
    $(".mobile-menu").addClass("active");
  });
  
  $(".mobile-menu .close").on("click", function () {
    $(".mobile-menu").removeClass("active");
  });
  
  $(".mobile-menu ul li.has-submenu a").each(function () {
    $(this).on("click", function () {
    $(this).siblings('.submenu-wrapper').slideToggle();
    $(".mobile-menu ul li.has-submenu a i").toggleClass("icons-rotet");
    });
  });