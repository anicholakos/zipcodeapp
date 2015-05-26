$(document).ready(function() {
    //Invoke ZIP Code Search API
    $("#btnSearch").click(function() {
        zipcode = $("#searchCriteria").val();
        var xhr = new XMLHttpRequest({mozSystem: true});
        xhr.open("GET", "http://api.zippopotam.us/us/" + zipcode, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                var result = "";
                var resp = JSON.parse(xhr.response);
                var city = resp.places[0]['place name'];
                var state = resp.places[0]['state'];
                var longitude = resp.places[0]['longitude'];
                var latitude = resp.places[0]['latitude'];
                result += "<li>Latitude: " + latitude + "</li>";
                result += "<li>Longitude: " + longitude + "</li>";
                result += "<li>City: " + city + "</li>";
                result += "<li>State: " + state + "</li>";
                console.log(result);
                $("#searchResults").html(result);
                $('#searchResults').listview('refresh');
            }
        }
        xhr.send();
    });
});
