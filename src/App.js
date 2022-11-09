import Routes from "./utils/Routes";

import { addData } from "./data/usersData";

import "./App.css";

function App() {
  addData();

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
