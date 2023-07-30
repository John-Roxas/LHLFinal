import SearchField from "../components/SearchField";
import NavigationBar from "../components/NavigationBar";

function NoPage() {
  return (
    <div className="App">
      <SearchField />
      <h2>Error 404: Page Not Found</h2>
      <NavigationBar />
    </div>
  );
}

export default NoPage;
