import "./Header.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import CreatePost from "../../Pages/CreatePost/CreatePost";
import Profil from "../../Pages/Profil/Profil";

function Header() {

  return (
    
    <Router>

  <div className="navigation">
 
    <nav>

      <ul>
        <li><Link to="/"><span>Accueil</span></Link></li>
        <li><Link to="/profil"><span>Mon profil</span></Link></li>
        <li><Link to="/createpost"><span>+ nouvelle publication</span></Link></li>
      <div>
        <li><Link className="btn-login" to="/signup"><span>Inscription</span></Link></li>
        <li><Link className="btn-login" to="/login"><span>Connexion</span></Link></li>
      </div>
      </ul>

    </nav>

  </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/createpost" element={<CreatePost />}></Route>
        <Route path="/profil" element={<Profil />}></Route>
      </Routes>
    </Router>
  );
}

export default Header;
