import SearchField from "../components/SearchField";
import NavigationBar from "../components/NavigationBar";
import RestaurantList from "../components/RestaurantList";
import Login from "../components/Login";

function Index(props) {
  function loginInfo(username, password) {
    const cred = {
      username,
      password,
    };
    console.log("from home.js", cred);
    props
      .getUserData(cred.username, cred.password)
      .then((res) => {
        props.handleUserDataResults(res);
      })
      .catch((error) => {
        console.error("Error while fetching user data:", error);
        // Handle the error, display an error message, etc.
      });
  }
  return (
    <div className="App">
      <div className="search-container">
        <a href="/search" className="form-field">
          <SearchField />
        </a>
        <Login loginData={loginInfo} />
      </div>
      <RestaurantList restaurants={props.restaurants} foods={props.foods} />
      <NavigationBar />
    </div>
  );
}

export default Index;
