import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import "./Minus.css";

const Minus = (props) => {
  const handlerDecrease = () => {
    if (props.foodCounter > 1) {
      props.setFoodCounter((prev) => prev - 1);
    }
  };

  return (
    <button onClick={handlerDecrease} className="minus-btn">
      <FontAwesomeIcon icon={faMinus} />
    </button>
  );
};

export default Minus;
