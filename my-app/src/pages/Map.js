import GeoMap from "../components/GeoMap";
import { useLocation, useNavigate } from "react-router-dom";

function Map(props) {
  const { customer_street_address, city, postal_code } = props.customerInfo;

  const customerAddress = `${customer_street_address} ${city}`;

  // obtained from pages/Restaurant.js
  const location = useLocation();
  const { restaurantAddress, restaurantPostalCode } = location.state;

  return (
    <div className="map-page-container">
      <div>
        <GeoMap
          restaurantAddress={restaurantAddress}
          restaurantPostalCode={restaurantPostalCode}
          customerAddress={customerAddress}
          customerPostalCode={postal_code}
        />
      </div>
    </div>
  );
}

export default Map;
