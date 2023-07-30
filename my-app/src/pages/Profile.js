import NavigationBar from "../components/NavigationBar";
import useLogin from "../hooks/useLogin";

function Profile(props) {
  console.log(props.customerInfo);
  const { handleLogout } = useLogin();
  return (
    <div className="App">
      <div className="profile-container">
        <div className="tile-item">{props.customerInfo.customer_avatar}</div>
        <div className="tile-item">{props.customerInfo.customer_name}</div>
        <div className="tile-item">List</div>
        <div className="tile-item">
          <button className="login-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
      {/* <h2 className="profile-container"></h2> */}
      <NavigationBar />
    </div>
  );
}

export default Profile;
