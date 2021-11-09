import { Outlet, NavLink } from "react-router-dom";
import logo from './assets/logo/ANDECT.png';
import githubLogo from './assets/github.png'

export default function App() {
  return (
    <div className="h-screen flex flex-col">
      <div>
        <nav className="container mx-auto p-2 flex items-center justify-between flex-wrap bg-white">
          <NavLink to="/andect/">
            <button className="flex items-center flex-shrink-0 mr-10 active navbar-item align-middle">
              <img className="fill-current h-20 w-20 mr-1" src={logo} alt="ANDECT Logo"></img>
              <span className="font-semibold text-4xl tracking-tight">ANDECT</span>
            </button>
          </NavLink>
          <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded border-yellow-400 hover:text-yellow-700 hover:border-yellow-600">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
            </button>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-xl font-semibold lg:flex-grow">
              <NavLink to="/andect/" className={"block mt-4 lg:inline-block lg:mt-0 hover:text-yellow-600 hover:bg-gray-50 p-2 mr-5 rounded align-middle"}>
                Home
              </NavLink >
              <NavLink to="/andect/test" className="block mt-4 lg:inline-block lg:mt-0 hover:text-yellow-600 hover:bg-gray-50 p-2 mr-5 rounded align-middle">
                Test
              </NavLink >
              <NavLink to="/andect/feedback" className="block mt-4 lg:inline-block lg:mt-0 hover:text-yellow-600 hover:bg-gray-50 p-2 mr-5 rounded align-middle">
                Feedback
              </NavLink >
              <NavLink to="/andect/contributor" className="block mt-4 lg:inline-block lg:mt-0 hover:text-yellow-600 hover:bg-gray-50 p-2 rounded align-middle">
                Contributor
              </NavLink >
            </div>
            <div>
              <a href="https://github.com/vinzmc/andect" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-green-500 hover:bg-white mt-4 lg:mt-0">
                <img src={githubLogo} className="w-12 align-middle hover:shadow-inner p-2 rounded" alt="Project Link"></img>
              </a>
            </div>
          </div>
        </nav>
      </div>
      <hr />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}