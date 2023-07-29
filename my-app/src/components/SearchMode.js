import "./SearchMode.css";

function SearchMode(props) {

  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="searchmode-container">
      Search By:
      <div>
        <button onClick={() => props.setMode("restauraunt")}>
          Restaurant Name
        </button>
        <button onClick={() => props.setMode("category")}>
          Category
        </button>
        <button onClick={() => props.setMode("name")}>
          Food
        </button>
      </div>
    </div>
  );
}

export default SearchMode;
