ymaps.ready(init);

function init() {

    if (document.documentElement.clientWidth >= 600) {

      var myMap = new ymaps.Map('ymap-metrogil', {
          center: [55.72067474644104,37.61281572554774],
          zoom: 17,
          controls: []
      }, {
          searchControlProvider: 'yandex#search'
      });
    } if (document.documentElement.clientWidth < 600) {
      var myMap = new ymaps.Map('ymap-metrogil', {
          center: [55.72067474644104,37.61281572554774],
          zoom: 16,
          controls: []
      }, {
          searchControlProvider: 'yandex#search'
      });
    }

    ittensyCollection = new ymaps.GeoObjectCollection(null, {
        iconLayout: 'default#image',
    })



    ittensyCollection
        .add(new ymaps.Placemark([55.72074438691877,37.612729894859264], {
            hintContent: 'ул. Шаболовка, 31Б',
        }))
    ;

    myMap.geoObjects.add(ittensyCollection);

}