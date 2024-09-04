import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App lg:max-w-[80%] mx-auto">
      <Outlet />
    </div>
  );
}

export default App;
