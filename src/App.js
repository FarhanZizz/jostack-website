import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App lg:max-w-[80%] mx-auto">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
