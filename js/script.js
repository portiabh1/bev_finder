var x = document.getElementById("long_lat");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude; 

    const myLatLng = { lat: position.coords.latitude, lng: position.coords.longitude };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: myLatLng,
    });

    new google.maps.Marker({
        position: myLatLng,
        map,
        title: "Here",
    });

    window.initMap = initMap;
}