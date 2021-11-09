//dependency
import { Outlet } from "react-router-dom";

//components
import Navbar from "./components/navbar";

//assets

export default function App() {
  return (
    <div className="h-screen flex flex-col">
      <div>
        <Navbar/>
      </div>
      <hr />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}