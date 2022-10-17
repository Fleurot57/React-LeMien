import "./Login.css";
import { useState } from "react";
import { Link } from "react-router-dom";

//Damien
//Formulaire login: input(mail), input(mdp)
//Boutton : Login

function Login() {

const [email, setEmail] = useState();
const [password, setPassword] = useState();

async function handleSubmit (e) {
  e.preventDefault()
  let item ={email, password}
  
  const options = {
    method: "POST",
    headers: {
    "Content-Type": "application/json"
    },
    body: JSON.stringify(item)
    };
    console.log("text")
    let result = await fetch("https://social-network-api.osc-fr1.scalingo.io/lemien/login", options)
    result = await result.json();
    localStorage.setItem('token', result.token);
}

  return (
    <section id="login-section">
      <div className="center-form">
        <div>
          <h2 className="mb-4">Connexion</h2>
          <form onSubmit={handleSubmit} className="login-form">
            <input
              required
              className="mb-1 form-input"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              required
              minLength="6"
              maxLength="16"
              className="mb-2 form-input"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mot de passe"
            />
            <button type="submit" className="login-btn">
              Connexion
            </button>
          </form>
          <div id="login-form-bottom">
            <p className="mb-2 login-account">Tu à un compte ?</p>

            <Link to="/signUp">
              <button className="login-create-btn">Je m'inscrit</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
