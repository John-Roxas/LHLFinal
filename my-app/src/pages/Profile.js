// import SearchBar from "../components/SearchBar";
import NavigationBar from "../components/NavigationBar";

function Profile() {
  return (
    <div className="App">
      <div className="profile-container">
        <div className="profile-avatar">Picture</div>
        <div>Customer info</div>
        <div>List</div>
      </div>
      {/* <h2 className="profile-container"></h2> */}
      <NavigationBar />
    </div>
  );
}

export default Profile;
