var count=0;
var c=0;
var c1=0;
function initMap(){
 
    const map = new google.maps.Map(
      document.getElementById("map"),
      {
        zoom: 8,
        center: { lat: 51.5072, lng: 0.1276 },
      }
    );
    const geocoder = new google.maps.Geocoder();
    const infowindow = new google.maps.InfoWindow(); 
    var enable_button=0;
    
   
    (document.getElementById("submit")).addEventListener(
      "click",
      () => {
        
        enable_button=0;
        document.getElementById('cal').value =""
        const map = new google.maps.Map(
          document.getElementById("map"),
          {
            zoom: 8,
            center: { lat: 51.5072, lng: 0.1276 },
          }
        );
        const geocoder = new google.maps.Geocoder();
        const infowindow = new google.maps.InfoWindow(); 
        geocodeLatLng(geocoder, map, infowindow);
      }
    );
    
    
    (document.getElementById("submit1")).addEventListener(
      "click",
      () => {
        document.getElementById("canvas").fill="";
        document.getElementById('cal').value =""
        enable_button=1;
        console.log(enable_button);
        const map = new google.maps.Map(
          document.getElementById("map"),
          {
            zoom: 8,
            center: { lat: 51.5072, lng: 0.1276 },
          }
        );
      
        const directionsRenderer = new google.maps.DirectionsRenderer();
        const directionsService = new google.maps.DirectionsService();
        directionsRenderer.setMap(map);
        calculateAndDisplayRoute(directionsService, directionsRenderer);
      }
    );
    (document.getElementById("submit4")).addEventListener(
      "click",
      () => {
        if(c1==1)
        {
          const map = new google.maps.Map(
            document.getElementById("map"),
            {
              zoom: 8,
              center: { lat: 51.5072, lng: 0.1276 },
            }
          );
        drawGrid("#FFFFFF");
        const geocoder = new google.maps.Geocoder();
        const infowindow = new google.maps.InfoWindow(); 
        
        
        transparent(geocoder, map, infowindow);
        console.log(map);
        }
      }
    );
    
    (document.getElementById("submit3")).addEventListener(
      "click",
      () => {
        
        if(enable_button==1)
        {
          document.getElementById('cal').value =""
        const input1 = (document.getElementById("dis1")).value;
        const latlng1Str = input1.split(",", 2);
        const latlng1 = {
          lat: parseFloat(latlng1Str[0]),
          lng: parseFloat(latlng1Str[1]),
        };
        const input2 = (document.getElementById("dis2")).value;
        const latlng2Str = input2.split(",", 2);
        const latlng2 = {
          lat: parseFloat(latlng2Str[0]),
          lng: parseFloat(latlng2Str[1]),
        };
        var distance = calculatedistance(parseFloat(latlng1Str[0]),parseFloat(latlng1Str[1]),parseFloat(latlng2Str[0]),parseFloat(latlng2Str[1]));
        document.getElementById('cal').value = distance.toFixed(2)+"  "+"miles"; 
      }
    }
    );
   

  }
  function transparent(
    geocoder,
    map,
    infowindow
  )
  {
   
     const input = (document.getElementById("latlng")).value;
        const latlngStr = input.split(",", 2);
            const latlng1 = {
              lat: parseFloat(latlngStr[0]-0.106209),
              lng: parseFloat((latlngStr[1]+8.106209)),
           };
           console.log(latlngStr[0]);
      geocoder
      .geocode({ location: latlng1 })
      .then((response) => {
        if (response.results[0]) {
          map.setZoom(11);
        const marker = new google.maps.Marker({
          position: latlng1,
          map: map,
        });
        infowindow.setContent(response.results[0].formatted_address);
        infowindow.open(map, marker);
      }}); 
  }
  function geocodeLatLng(
    geocoder,
    map,
    infowindow
  ) {
    const input = (document.getElementById("latlng")).value;
    const latlngStr = input.split(",", 2);
    const latlng = {
      lat: parseFloat(latlngStr[0]),
      lng: parseFloat(latlngStr[1]),
    };
    
   
    geocoder
      .geocode({ location: latlng })
      .then((response) => {
        if (response.results[0]) {
          map.setZoom(11);
  
          const marker = new google.maps.Marker({
            position: latlng,
            map: map,
          });
          marker.addListener("click", () => {
            var l1=(-parseFloat(latlngStr[0]));
            var l2=(180-parseFloat(latlngStr[1]));
            document.getElementById("latlng").value=l1.toString()+","+l2.toString();
            const latlng1 = {
                lat:l1,
                lng:l2,
              };
              const svgMarker = {
                path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
                fillColor: "black",
                fillOpacity: 0.6,
                strokeWeight: 0,
                rotation: 0,
                scale: 2,
                anchor: new google.maps.Point(15, 30),
              };
            const marker1 = new google.maps.Marker({
                position: latlng1,
                map: map,
                icon: svgMarker,
                
              });
              infowindow.setContent(response.results[0].formatted_address);
              infowindow.open(map, marker1);

              marker1.addListener("click",() => {
                
                 $(document).ready(function(){
                  $(document).mousemove(function(event){
                   if(c==0)
                   {
                    c1=1;
                    $("#canvas").css("top",event.clientY-40);
                    $("#canvas").css("left",event.clientX-40);
                   
                    drawGrid("#333333");
                    const input3 = (document.getElementById("latlng")).value;
                    const latlng3Str = input3.split(",", 2);
                        const latlng3 = {
                          lat: parseFloat(latlng3Str[0]-18.106209),
                          lng: parseFloat((latlng3Str[1]+8.106209)),
                       };
                       console.log(latlng3);
                       
                    const marker3 = new google.maps.Marker({
                      position: latlng3,
                      map: map,
                    });
                    infowindow.setContent(response.results[0].formatted_address);
                    infowindow.open(map, marker3);
                   }
                   c=c+1;
                  });
                }); 
               
              });
          });
  
          infowindow.setContent(response.results[0].formatted_address);
          infowindow.open(map, marker);
          
        } else {
          window.alert("No results found");
        }
      })
      .catch((e) => window.alert("Geocoder failed due to: " + e));
     
  }
  function toNumberString(num) { 
    if (Number.isInteger(num)) { 
      return num + ".0"
    } else {
      return num.toString(); 
    }
  }
function drawGrid(
  l
)
{
 var canvas = document.querySelector('#canvas').getContext('2d'),side = 0,
  size = 100,
  x = 100,
  y = 100;

canvas.beginPath();
canvas.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));

for (side; side < 7; side++) {

canvas.lineTo(x + size * Math.cos(side * 2 * Math.PI / 6), y + size * Math.sin(side * 2 * Math.PI / 6));

}

canvas.fillStyle =l;
canvas.fill();

}

function calculateAndDisplayRoute(
  directionsService,
  directionsRenderer 
) {
  const selectedMode = (document.getElementById("mode"))
    .value;
    const input1 = (document.getElementById("dis1")).value;
    const latlng1Str = input1.split(",", 2);
    const latlng1 = {
      lat: parseFloat(latlng1Str[0]),
      lng: parseFloat(latlng1Str[1]),
    };
    const input2 = (document.getElementById("dis2")).value;
    const latlng2Str = input2.split(",", 2);
    const latlng2 = {
      lat: parseFloat(latlng2Str[0]),
      lng: parseFloat(latlng2Str[1]),
    };
  directionsService
    .route({
      origin: { lat: parseFloat(latlng1Str[0]), lng: parseFloat(latlng1Str[1]) },
      destination: { lat: parseFloat(latlng2Str[0]), lng: parseFloat(latlng2Str[1]) }, 
      travelMode: google.maps.TravelMode[selectedMode],
    })
    .then((response) => {
      directionsRenderer.setDirections(response);
    })
    .catch((e) => window.alert("Directions request failed due to " + status));
}
function calculatedistance(mk11,mk12,mk21,mk22)
{
  var R = 3958.8;
  var rlat1 = mk11 * (Math.PI/180); 
  var rlat2 = mk21 * (Math.PI/180);
  var difflat = rlat2-rlat1;
  var difflon = (mk22-mk12) * (Math.PI/180); 
  var d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)));
  return d;
}

window.initMap = initMap;  
