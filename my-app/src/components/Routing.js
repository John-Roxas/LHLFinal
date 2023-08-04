import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";

L.Marker.prototype.options.icon = L.icon({
  // this sets the icon for the marker
  iconUrl: `${process.env.PUBLIC_URL}/images/location.png`,
  iconSize: [38, 38], // size of the icon
});

export default function Routing(props) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: [props.startingPoint, props.endingPoint],
      draggableWaypoints: false, // makes marker not draggable
      lineOptions: {
        addWaypoints: false, // makes route not draggable
        styles: [{ color: "cadetblue", opacity: 1, weight: 5 }],
      },
    }).addTo(map);

    routingControl.hide(); // hides the minimap direction

    return () => map.removeControl(routingControl);
  }, [map]);

  return null;
}
