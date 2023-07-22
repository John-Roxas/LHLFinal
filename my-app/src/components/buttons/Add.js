import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./Add.css";

function Add(props) {
  const handlerIncrease = () => {
    props.setFoodCounter((prev) => prev + 1);
  };

  return (
    <button onClick={handlerIncrease} className="add-btn">
      <FontAwesomeIcon icon={faPlus} />
    </button>
  );
}

export default Add;
