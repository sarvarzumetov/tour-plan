$(document).ready(function () {
  var hotelSlider = new Swiper(".hotel-slider", {
    // Optional parameters
    slidesPerView: 1,
    loop: true,
    keyboard: {
      enabled: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },
    effect: "coverflow",
  });
  var reviewsSlider = new Swiper(".reviews-slider", {
    // Optional parameters
    slidesPerView: 1,
    loop: true,
    keyboard: {
      enabled: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },
  });

  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }

  $(document).keyup(function (e) {
    if (e.keyCode == 27) {
      //hides all modal boxes when escape key pressed
      $(".modal").hide();
    }
  });

  // Обработка форм
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "Your name should contain more 2 symbols",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "Please specify phone number",
        },
      },
    });
  });
  AOS.init();

  $(".map").click(function () {
    var map = $(this).attr("data-map");
    var map_width = $(window).width();
    var map_height = $(this).attr("data-map-height");
    $(this).css("height", map_height);
    if (map_width > 640) {
      map_width = 640;
    }
    $(this).html(
      '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3193.1211127681413!2d174.76497850883564!3d-36.83957536888461!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc797af5c706f9874!2sHilton%20Auckland!5e0!3m2!1sru!2sus!4v1602174410480!5m2!1sru!2sus" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe>'
    );
  });
});
