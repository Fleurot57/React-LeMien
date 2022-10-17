import "./Login.css";
import { useState } from "react";
import { Link } from "react-router-dom";

//Damien
//Formulaire login: input(mail), input(mdp)
//Boutton : Login

function Login() {

const [email, setEmail] = useState();
const [password, setPassword] = useState();

async function handleSubmit () {
  let item =(email, password)
  const options = {
    method: "POST",
    headers: {
    "Content-Type": "application/json"
    },
    body: JSON.stringify(item)({
    })
    };
    let result = await fetch("https://social-network-api.osc-fr1.scalingo.io/lemien/login", options)
    result = await result.json();
}

  return (
    <div className="form-center">
      <form onSubmit={handleSubmit}>
        <p class="title-login">Connection</p>
        <label>
          <span>Adresse E-mail :</span><input type="text" placeholder="Exemple@gmail.com" onChange={(e) => setEmail(e.target.value)}></input>
        </label>
        <label htmlFor="password">
          <span>Mot de passe :</span><input type="password" placeholder="********" onChange={(e) => setPassword(e.target.value)}></input>
        </label>
        <div>
        <Link to="/signup">Créer un compte ?</Link>
        <button type="submit">Se connecter</button>
        </div>
      </form>
    </div>
  );
}

export default Login;