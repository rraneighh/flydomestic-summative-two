mapboxgl.accessToken = 'pk.eyJ1IjoicnJhbmVpZ2hoIiwiYSI6ImNrcTM3ZDdtMTBsZ2YydnA0cXh1MjFmeDcifQ.Q50ecmnUtFq4ca4c8lPpNg';

var map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/mapbox/light-v10', // style URL
  center: [175.4982476029604, -36.75866611087255], // starting position [lng, lat]
  zoom: 13 // starting zoom
});

var hostel = new mapboxgl.Marker({
  id: 'hostel',
  color: "rgb(224, 109, 109)",
  draggable: true
})
.setLngLat([175.50668693013924, -36.761610271328074])
.addTo(map);

var hotel = new mapboxgl.Marker({
  color: "rgb(224, 170, 109)",
  draggable: true
})
.setLngLat([175.50063586773223, -36.75593785800499])
.addTo(map);

var motel = new mapboxgl.Marker({
  color: "rgb(109, 224, 193)",
  draggable: true
})
.setLngLat([175.4747048939443, -36.75188108387518])
.addTo(map);

var house = new mapboxgl.Marker({
  color: "rgb(165, 109, 224)",
  draggable: true
})
.setLngLat([175.501810337624, -36.736693111818916])
.addTo(map);
