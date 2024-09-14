// ====================================== Fancy box starts ======================================
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});
// ====================================== Scroll back to top starts ======================================
(function ($) {
  "use strict";
  $(document).ready(function () {
    "use strict";
    //Scroll back to top
    var progressPath = document.querySelector(".progress-wrap path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 550;
    jQuery(window).on("scroll", function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery(".progress-wrap").addClass("active-progress");
      } else {
        jQuery(".progress-wrap").removeClass("active-progress");
      }
    });
    jQuery(".progress-wrap").on("click", function (event) {
      event.preventDefault();
      jQuery("html, body").animate({ scrollTop: 0 }, duration);
      return false;
    });
  });
})(jQuery);
// ====================================== Web menu active starts ======================================
$(document).ready(function () {
  // Get all menu items
  var menuItems = $(".menu-bar li a");
  // Add click event handler to each menu item
  menuItems.click(function (e) {
    e.preventDefault(); // Prevent default link behavior

    // Remove active class from all menu items
    menuItems.removeClass("active");
    // Add active class to the clicked menu item
    $(this).addClass("active");
    // Scroll to the corresponding section
    var targetSection = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(targetSection).offset().top,
      },
      600
    );
  });
  // Activate the first menu item by default
  menuItems.first().addClass("active");
});
// ====================================== mobile menu starts ======================================
$(".scroll").click(function (e) {
  e.preventDefault();
  var url = this.href;
  var urlHash = this.hash;
  var parts = url.split("#");
  var trgt = parts[1];
  var target_offset = $("#" + trgt).offset();
  var target_top = target_offset.top;
  $("html, body").animate(
    {
      scrollTop: target_top,
    },
    500
  );
  if ($("nav.dots a").hasClass("active")) {
    $("nav.dots a").removeClass("active");
  }
  if (urlHash == "#section-1") {
    $("nav.dots a.scroll-1").addClass("active");
  }
  if (urlHash == "#section-2") {
    $("nav.dots a.scroll-2").addClass("active");
  }
  if (urlHash == "#section-3") {
    $("nav.dots a.scroll-3").addClass("active");
  }
  if (urlHash == "#section-4") {
    $("nav.dots a.scroll-4").addClass("active");
  }
});
$("nav.dots a").click(function () {
  if ($("nav.dots a").hasClass("active")) {
    $("nav.dots a").removeClass("active");
  }
  $(this).addClass("active");
});
$(".hamburger, nav.main ul li a").on("click", function (e) {
  e.preventDefault();
  $(".hamburger").toggleClass("is-open");
  $("nav.main ul").toggleClass("is-open");
});
