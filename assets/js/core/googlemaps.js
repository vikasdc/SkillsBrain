var map;
var myLatLng = {lat: 17.4407097, lng: 78.3961363};
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 17,
    
  });
  var marker = new google.maps.Marker({
position: myLatLng,
map: map,
draggable:true,
icon:'../assets/img/placeholder.png',
animation:google.maps.Animation.DROP,
title: 'SkillBrain, 91 Springboard Kavuri Hills, Hyd'});
marker.setMap(map);
var infowindow = new google.maps.InfoWindow({
  content:"<h6 class='mx-2 text-primary font-weight-light'>SkillBrain, 91 Springboard Kavuri Hills, Hyd</h6>"
});
infowindow.open(map, marker); 
marker.addListener('mouseover',function(){
infowindow.open(map, marker);      
})
marker.addListener('mouseout',function(){
infowindow.close();
})

}