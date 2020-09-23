ymaps.ready(function () {
  var myMap = new ymaps.Map(
      "map",
      {
        center: [-36.839618, 174.765882],
        zoom: 17,
      },
      {
        searchControlProvider: "yandex#search",
      }
    ),
    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),
    myPlacemark = new ymaps.Placemark(
      myMap.getCenter(),
      {
        hintContent: "Hilton Auckland",
        balloonContent: "Quay Street, 147, Auckland, New Zealand",
      },
      {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#image",
        // Своё изображение иконки метки.
        iconImageHref: "",
        // Размеры метки.
        iconImageSize: [30, 30],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38],
      }
    ),
    myPlacemarkWithContent = new ymaps.Placemark([-36.839618, 174.765882], {
      hintContent: "Hilton Auckland",
      balloonContent: "Quay Street, 147, Auckland, New Zealand",
      iconContent: "",
    });

  myMap.geoObjects.add(myPlacemark).add(myPlacemarkWithContent);
});
