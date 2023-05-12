import React, { useEffect } from 'react';
//import colorSharp2 from "../assets/img/footer.png";
import "../styles/Breweries.css"

function Breweries() {
  var script;
  useEffect(() => {
    const apiKey = 'AIzaSyADKaoEzHMnfsAqSyxr5XxuNDjjNCB5CQ8';

    if( script !== undefined)
      return;
    script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap&v=weekly&libraries=places`;
    script.defer = true;
    script.addEventListener('load', () => {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 32.3181, lng: -106.7626 },
        zoom: 11.5,
      });

      const request = {
        placeId: 'ChIJN1t_tDeuEmsRUsoyG83frY4',
        fields: ['name', 'formatted_address', 'place_id', 'geometry'],
      };


      const service = new window.google.maps.places.PlacesService(map);
      service.getDetails(request, (place, status) => {
        if (
          status === window.google.maps.places.PlacesServiceStatus.OK &&
          place &&
          place.geometry &&
          place.geometry.location
        ) {
          const marker = new window.google.maps.Marker({
            map,
            position: place.geometry.location,
          });
    
          window.google.maps.event.addListener(marker, 'click', () => {
            const content = document.createElement('div');
            const nameElement = document.createElement('h2');
    
            nameElement.textContent = place.name;
            content.appendChild(nameElement);
    
            const placeIdElement = document.createElement('p');
            placeIdElement.textContent = place.place_id;
            content.appendChild(placeIdElement);
    
            const placeAddressElement = document.createElement('p');
            placeAddressElement.textContent = place.formatted_address;
            content.appendChild(placeAddressElement);
    
            infoWindow.setContent(content);
            infoWindow.open(map, marker);
          });
        }
      }); 
      let infoWindow = new window.google.maps.InfoWindow();

      const locationButton = document.createElement("button");
      locationButton.textContent = "Pan to Current Location";
      locationButton.classList.add("custom-map-control-button");
      map.controls[window.google.maps.ControlPosition.TOP_CENTER].push(locationButton);
      locationButton.addEventListener("click", () => {
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              };
    
              infoWindow.setPosition(pos);
              infoWindow.setContent("<div style='color: black;'>Location found.</div>");
              infoWindow.open(map);
              map.setCenter(pos);

              window.google.maps.event.addListenerOnce(map, 'tilesloaded', () => {
                // Create a marker at the user's location
                const marker = new window.google.maps.Marker({
                  position: pos,
                  map: map,
                  title: 'Your Location'
                });     
              });              
            },
            () => {
              handleLocationError(true, infoWindow, map.getCenter());
            }
          );
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      });
      
      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(
          browserHasGeolocation
            ? "Error: The Geolocation service failed."
            : "Error: Your browser doesn't support geolocation."
        );
        infoWindow.open(map);
      }
      
      
      const locations = [
        { lat: 32.3116, lng: -106.7577, name: "TorC Brewing" },
        { lat: 32.3100, lng: -106.7789, name: "Little Toad Creek Brewery" },
        { lat: 32.3096, lng: -106.79347, name: "High Desert Brewing Co." },
        { lat: 32.3102, lng: -106.7791, name: "The Icebox Brewery" },
        { lat: 32.3146, lng: -106.7444, name: "Pecan Grill & Brewery" },
        { lat: 32.2855, lng: -106.7582, name: "Bosque Brewing Co." },
        { lat: 32.2709, lng: -106.7909, name: "Spotted Dog Brewery" },
        { lat: 32.3107, lng: -106.8171, name: "Ice Box Picacho" },
        { lat: 32.3085, lng: -106.8377, name: "Picacho Peak Brewing Co." },
        { lat: 32.3434, lng: -106.7651, name: "Bosque Brewing Co. - Telshor" },
        { lat: 32.3448, lng: -106.7736, name: "Icebox Brewery N Main" },
      ];
      
      const infowindow = new window.google.maps.InfoWindow();
      
      locations.forEach((location) => {
        const marker = new window.google.maps.Marker({
          position: { lat: location.lat, lng: location.lng },
          map: map,
          title: location.name,
        });
      
        // Get place details using Google Places API
        const service = new window.google.maps.places.PlacesService(map);
      
        service.findPlaceFromQuery(
          {
            query: location.name,
            fields: ["place_id"],
          },
          (results, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
              const placeId = results[0].place_id;
      
              service.getDetails(
                {
                  placeId: placeId,
                  fields: [
                    "photos",
                    "name",
                    "formatted_address",
                    "formatted_phone_number",
                    "website",
                    "rating",
                    "reviews",
                    "opening_hours",
                  ],
                },
                (place, status) => {
                  if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                    marker.addListener("click", () => {
                      // Get photo URLs
                      const photoUrls = place.photos ? place.photos.map(photo => photo.getUrl()) : [];
                      // Get opening hours
                      const openingHours = place.opening_hours ? place.opening_hours.weekday_text.join("<br>") : "N/A";
                      infowindow.setContent(
                        `<div style="max-width: 200px;">
                        <div style="width: 100%; height: 100px; overflow: hidden;">
                        <img src="${place.photos[0].getUrl({maxWidth: 200, maxHeight: 100})}" style="width: 100%; height: 100%; object-fit: cover;">
                        </div>
                        <div style="padding: 10px; color: black;">
                          <h3 style="margin: 0 0 5px 0;">${place.name}</h3>
                          <p style="margin: 0 0 5px 0;">${place.formatted_address}</p>
                          <p style="margin: 0 0 5px 0;">${place.formatted_phone_number}</p>
                          <p style="margin: 0 0 5px 0;">Website: <a href="${place.website}" target="_blank">${place.website}</a></p>
                          <p style="margin: 0 0 5px 0;">Rating: ${place.rating} (${place.reviews.length} reviews)</p>
                          <p style="margin: 0 0 5px 0;">Hours of Operation:</p>
                          ${openingHours !== "N/A" ? `<ul style="margin: 0; padding-left: 15px;">
                            ${place.opening_hours.weekday_text.map(day => `<li>${day}</li>`).join('')}
                          </ul>` : "<p>Hours not available.</p>"}
                        </div>
                      </div>`
                      );
                      infowindow.open(map, marker);
                    });
                  } else {
                    console.error("Error retrieving place details:", status);
                  }
                }
              );
            } else {
              console.error("Error retrieving place ID:", status);
            }
          }
        );
      });

    });
    document.head.appendChild(script);

  }, []);
  

  return (
    <section className="breweries" id="breweries">
      <h2>Breweries</h2>
      <div id="map" style={{ width: '80%', height: '70vh', margin: 'auto', border: '10px solid black'}}></div>
    </section>
  );
  
}

export default Breweries;
