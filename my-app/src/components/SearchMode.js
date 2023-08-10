import "./SearchMode.css";

function SearchMode(props) {

  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="searchmode-container">
      Search for Restaurants By:
      <div className="horizontal-container">
        <button 
          className="btn"
          onClick={() => props.setMode("restauraunt")}
        >
          Restaurant Name
        </button>
        <button 
          className="btn"
          onClick={() => props.setMode("category")}
        >
          Category
        </button>
        <button
          className="btn" 
          onClick={() => props.setMode("name")}
        >
          Food
        </button>
      </div>
    </div>
  );
}

export default SearchMode;
