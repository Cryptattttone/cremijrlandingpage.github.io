function initMap() {
  // Crea un objeto de opciones de mapa
  var mapOptions = {
    center: {lat: 24.788610, lng: -107.383140}, // Coordenadas de la ubicación de tu food truck
    zoom: 19 // Nivel de zoom del mapa (más alto es más cerca)
  }
  // Crea un nuevo mapa y asigna el elemento del mapa a una variable
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  // Añade un marcador al mapa en la ubicación de tu food truck
  var marker = new google.maps.Marker({
    position: {lat: 24.788610, lng: -107.383140}, // Coordenadas del marcador
    map: map // Mapa donde se mostrará el marcador
  });
}