const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-right',
      prevEl: '.swiper-button-left',
    }, 
  });

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.23029991746414, lng:  -8.628505283609089 },
    zoom: 14,
  });
}

window.initMap = initMap;