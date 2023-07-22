import SearchBar from "../components/SearchBar";
import NavigationBar from "../components/NavigationBar";

function Profile() {
  return (
    <div className="App">
      <SearchBar />
      <h2 className="profile-container">My Account</h2>
      <NavigationBar />
    </div>
  );
}

export default Profile;
