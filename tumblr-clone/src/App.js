import "./App.css";
import ProfileCard from "./Component/profile/ProfileCard";
import Routes from "./Component/Routes/Routes";
import { TextContentCard } from "./Component/TextContentCard";
import { UserProfile } from "./Component/UserProfile/UserProfile";
 
function App() {
  return (
    <div className="App">
      <Routes />
      {/* <UserProfile/> */}
    </div>
  );
}

export default App;
