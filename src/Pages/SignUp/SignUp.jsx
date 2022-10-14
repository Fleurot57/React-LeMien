import "./SignUp.css";
import { Link } from "react-router-dom";
import { useState } from "react";

//Roger
//Title
//Formulaire : input(Nom), Input(prénom), input(mail), input(mdp)
//Button (SignIn)
//Sign In = se connecter
//Sign Up = s'inscrire

function SignUp() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleInputChangeSignUp = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "lastName") {
      setLastName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
  };

  const handleSubmitSignUp = () => {
    console.log(firstName, lastName, email, password);
  };

  return (
    <section id="sign-up-section">
      <div className="center-form">
        <div>
          <h2 className="mb-4">S'inscrire</h2>
          <form action="" className="sign-up-form">
            <input
              className="mb-1 form-input"
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => handleInputChangeSignUp(e)}
              placeholder="Nom"
            />
            <input
              className="mb-1 form-input"
              type="text"
              value={firstName}
              onChange={(e) => handleInputChangeSignUp(e)}
              id="firstName"
              placeholder="Prénom"
            />
            <input
              className="mb-1 form-input"
              autoComplete="username"
              type="email"
              id="email"
              value={email}
              onChange={(e) => handleInputChangeSignUp(e)}
              placeholder="Email"
            />
            <input
              className="mb-2 form-input"
              autoComplete="current-password"
              type="text"
              id="password"
              value={password}
              oncChange={(e) => handleInputChangeSignUp(e)}
              placeholder="Mot de passe"
            />
            <button
              onClick={() => handleSubmitSignUp()}
              type="submit"
              className="sign-up-btn"
            >
              Je m'inscris
            </button>
          </form>
          <div id="sign-up-form-bottom">
            <p className="mb-2 create-account">Tu as déjà un compte ?</p>

            <Link to="/login">
              <button className="sign-in-btn">Je m'indentifie</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
