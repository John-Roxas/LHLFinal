import "./GeoMap.css";
import {
  MapContainer,
  Marker,
  TileLayer,
  Popup,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function GeoMap() {
  const [addressOne, setAddressOne] = useState({});

  const location = useLocation();
  const { restaurantAddress } = location.state;

  // console.log(restaurantAddress);

  useEffect(() => {
    const findAddress = (address) => {
      var url =
        "https://nominatim.openstreetmap.org/search?format=json&limit=3&q=" +
        address;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          setAddressOne(data);
        })
        .catch((err) => console.log(err));
    };
    findAddress(restaurantAddress);
  }, []);

  // console.log("addressOne lat: ", addressOne[0].lat);
  // console.log("addressOne lon: ", addressOne[0].lon);
  // temporary testing markers
  const markers = [
    {
      geocode: [48.86, 2.3522],
      popUp: "Hello, I am pop up 1",
    },
    {
      geocode: [48.85, 2.3522],
      popUp: "Hello, I am pop up 2",
    },
  ];

  let startpoint = L.latLng(markers[0].geocode[0], markers[0].geocode[1]);
  let endpoint = L.latLng(markers[1].geocode[0], markers[1].geocode[1]);

  // console.log("startpoint ", startpoint);
  // console.log("endpoint ", endpoint);

  const polylineCoordinates = [startpoint, endpoint];

  let distance = (startpoint.distanceTo(endpoint) / 1000).toFixed(2); // Convert to kilometers
  console.log(`${distance}km`);

  const customIcon = new L.Icon({
    iconUrl: `${process.env.PUBLIC_URL}/images/location.png`,
    iconSize: [38, 38], // size of the icon
  });

  return (
    <>
      <p>The distance between the two points are {distance}km</p>
      <MapContainer center={[48.8566, 2.3522]} zoom={16}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markers.map((marker, index) => (
          <Marker key={index} position={marker.geocode} icon={customIcon}>
            <Popup>
              <h2>{marker.popUp}</h2>
            </Popup>
          </Marker>
        ))}
        <Polyline positions={polylineCoordinates} color="purple" />
      </MapContainer>
    </>
  );
}

export default GeoMap;
