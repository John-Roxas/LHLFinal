import SearchBar from "../components/SearchBar";
import NavigationBar from "../components/NavigationBar";

function NoPage() {
  return (
    <div className="App">
      <SearchBar />
      <h2>Error 404: Page Not Found</h2>
      <NavigationBar />
    </div>
  );
}

export default NoPage;
