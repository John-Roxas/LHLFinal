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

function GeoMap(props) {
  const [starting, setStarting] = useState([]); // Just setting points
  const [ending, setEnding] = useState([]); // Just settings points

  const [startingLatLon, setStartingLatLon] = useState([]); // Setting points to latLng
  const [endingLatLon, setEndingLatLon] = useState([]); // Setting points to latLng

  const getCoordinates = (address, coordinates, latLonCoordinates) => {
    let url =
      "https://nominatim.openstreetmap.org/search?format=json&limit=3&q=" +
      address;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        coordinates([data[0]?.lat, data[0]?.lon]); // Setting just array of coordinates
        latLonCoordinates(L.latLng([data[0]?.lat, data[0]?.lon])); // Setting points to latLng
      })
      .catch((err) => console.log(err));
  };

  //This uses the 'url + address' and converts the addresses to lat and lon points
  useEffect(() => {
    // using postal codes to serach gives an exact point for map (most direct and accurate)
    getCoordinates(props.restaurantPostalCode, setStarting, setStartingLatLon);
    getCoordinates(props.customerPostalCode, setEnding, setEndingLatLon);
  }, []);

  const customIcon = new L.Icon({
    iconUrl: `${process.env.PUBLIC_URL}/images/location.png`,
    iconSize: [38, 38], // size of the icon
  });

  const distance = () => {
    let distance = (startingLatLon.distanceTo(endingLatLon) / 1000).toFixed(2); // Convert to kilometers
    return <p>The distance between the two points are {distance}km</p>;
  };

  const startMarker = () => {
    return (
      <Marker position={starting} icon={customIcon}>
        <Popup>Restaurant: {props.restaurantAddress}</Popup>
      </Marker>
    );
  };

  const endMarker = () => {
    return (
      <Marker position={ending} icon={customIcon}>
        <Popup>Home: {props.customerAddress}</Popup>
      </Marker>
    );
  };

  const routing = () => {
    L.Routing.control({
      waypoints: [startingLatLon, endingLatLon],
    });
  };

  const polyLine = () => {
    const polylineCoordinates = [startingLatLon, endingLatLon];
    return <Polyline positions={polylineCoordinates} color="purple" />;
  };

  if (starting.length === 0 || ending.length === 0) {
    return <p>Loading...</p>; // You can add a loading indicator or any other content here while waiting for the data.
  }

  return (
    <>
      {distance()}
      <MapContainer center={starting} zoom={16}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {startMarker()}
        {endMarker()}

        {/* {routing()} */}
        {polyLine()}
      </MapContainer>
    </>
  );
}

export default GeoMap;
