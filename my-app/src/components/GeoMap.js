import "./GeoMap.css";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Routing from "./Routing";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faTruck,
  faHouseUser,
  faRoad,
} from "@fortawesome/free-solid-svg-icons";

function GeoMap(props) {
  const [starting, setStarting] = useState([]); // Just setting points
  const [ending, setEnding] = useState([]); // Just settings points

  const [startingLatLon, setStartingLatLon] = useState([]); // Setting points to latLng
  const [endingLatLon, setEndingLatLon] = useState([]); // Setting points to latLng

  const history = useNavigate(); // this is used to go back to previous page

  const getCoordinates = (address, coordinates, latLonCoordinates) => {
    let url =
      "https://nominatim.openstreetmap.org/search?format=json&limit=3&q=" +
      address;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
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

  const distance = () => {
    let distance = (startingLatLon.distanceTo(endingLatLon) / 1000).toFixed(2); // Convert to kilometers
    return <p>{distance}km</p>;
  };

  if (starting.length === 0 || ending.length === 0) {
    return (
      <div className="map-loading-message">
        <h1>Loading Map...</h1>
      </div>
    ); // You can add a loading indicator or any other content here while waiting for the data.
  }

  return (
    <>
      <button
        onClick={() => history(-1)}
        className="back-button map-back-button"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <div className="delivery-address-container">
        <div className="delivery-info">
          <FontAwesomeIcon icon={faTruck} />
          <p>
            {props.restaurantAddress} {props.restaurantPostalCode}
          </p>
        </div>
        <div className="user-info">
          <FontAwesomeIcon icon={faHouseUser} />
          <p>
            {props.customerAddress} {props.customerPostalCode}
          </p>
        </div>
        <div className="distance-info">
          <FontAwesomeIcon icon={faRoad} />
          {distance()}
        </div>
      </div>
      <MapContainer center={starting} zoom={16}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Routing startingPoint={startingLatLon} endingPoint={endingLatLon} />
      </MapContainer>
    </>
  );
}

export default GeoMap;
