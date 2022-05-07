import "./App.css";
import Profile from "./profile/Profile";

import pp from "./pp.jpg";

function App() {
  return (
    <div>
      <Profile>
        <img src={pp} alt="alan-wake" />
      </Profile>
      ;
    </div>
  );
}

export default App;
