var map;
var image = 'img/pin_icon.png';
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 59.938743, lng: 30.323058},
          zoom: 18
        }),

        marker = new google.maps.Marker({
          position: {lat: 59.938743, lng: 30.323419},
          map: map,
          icon: image
        });
      }