import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SignIn from "../../Pages/SignIn/SignIn";
import Profil from "../../Pages/Profil/Profil";

import './Header.css';
import CreatePost from "../../Pages/CreatePost/CreatePost";

const router = createBrowserRouter([
  {
  path: "/",
  element: <Home/>,
  },
  {
  path: "/Login",
  element: <Login/>,
  },
  {
  path: "/SignIn",
  element: <SignIn/>,
  },
  {
  path: "/CreatePost",
  element: <CreatePost/>,
  },
  {
  path: "/Profil",
  element: <Profil/>,
  },
])

//laura
//function Router

function Header() {
  return (
  <div>
    <Link to="/">Accueil</Link>
    <Link to="/Login">Accueil</Link>
    <Link to="/SignIn">Accueil</Link>
    <Link to="/CreatePost">Accueil</Link>
    <Link to="/Profil">Accueil</Link>
      <RouterProvider router={router}/>
  </div>
  )
}

export default Header;
