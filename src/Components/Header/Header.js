import './Header.css';
import  { BrowserRouter as Router, Routes, Route, Link} from  'react-router-dom' ;  
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SignIn from "../../Pages/SignIn/SignIn";
import CreatePost from "../../Pages/CreatePost/CreatePost";
import Profil from "../../Pages/Profil/Profil";

function Header() {

  return (

  <Router>

  <div>
 
    <nav>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signin">SignIn</Link></li>
        <li><Link to="/createpost">CreatePost</Link></li>
        <li><Link to="/profil">Profil</Link></li>
      </ul>

    </nav>

  </div>

  <Routes>  
    <Route path='/' element={< Home />}></Route>  
    <Route path='/login' element={< Login />}></Route>  
    <Route path='/signin' element={< SignIn />}></Route>
    <Route path='/createpost' element={< CreatePost />}></Route>  
    <Route path='/profil' element={< Profil />}></Route>  
  </Routes>

</Router>

  )
}

export default Header;
