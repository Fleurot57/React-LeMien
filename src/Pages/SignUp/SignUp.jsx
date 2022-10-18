import "./SignUp.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//Title
//Formulaire : input(Nom), Input(prénom), input(mail), input(mdp)
//Button (SignUp)

function SignUp() {
  // It's usually better to use redirect in loaders and actions than this hook
  // The useNavigate hook returns a function that lets you navigate programmatically
  const navigate = useNavigate();

  // States for registration
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // States for checking the errors
  // const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Cette fonction permet d'envoyer les informations de l'utilisateur à l'API.
  //Nom, prénom, email, password.

  async function handleSubmitSignUp(e) {
    e.preventDefault();
    try {
      let user = {
        firstname: firstName,
        lastname: lastName,
        email: email,
        password: password,
      };

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      };
      let result = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/lemien/register",
        options
      );

      result = await result.json();
      if (result.status === 200) {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setMessage("L'utilisateur a été créé avec succès");
      } else {
        setMessage("Une erreur s'est produite");
      }
    } catch (error) {
      console.log(error);
    }
    console.log(
      "Prénom :" + firstName,
      "Nom :" + lastName,
      "Email :" + email,
      "Password :" + password
    );
  }

  return (
    <section id="sign-up-section">
      <div className="center-form">
        <div>
          <h2 className="mb-4">S'inscrire</h2>
          <form onSubmit={handleSubmitSignUp} className="sign-up-form">
            <input
              required
              className="mb-1 form-input"
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Nom"
            />
            <input
              required
              className="mb-1 form-input"
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Prénom"
            />
            <input
              required
              className="mb-1 form-input"
              autoComplete="username"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              required
              minLength="6"
              maxLength="16"
              className="mb-2 form-input"
              autoComplete="current-password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mot de passe"
            />
            <button
              type="submit"
              onClick={() => navigate("/login")}
              className="sign-up-btn"
            >
              Je m'inscris
            </button>
            <div className="message">{message ? <p>{message}</p> : null}</div>
          </form>
          <div id="sign-up-form-bottom">
            <p className="mb-2 create-account">Tu as déjà un compte ?</p>

            <button className="sign-in-btn" onClick={() => navigate("/login")}>
              Je m'indentifie
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
