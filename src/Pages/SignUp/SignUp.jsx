import "./SignUp.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//Title
//Formulaire : input(Nom), Input(prénom), input(mail), input(mdp)
//Button (SignUp)

function SignUp() {
  // Le Hook useNavigate renvoie une fonction qui permet de naviguer de manière programmatique.
  // Source : https://reactrouter.com/en/main/hooks/use-navigate

  // Je crée la constante navigate qui utilise le Hook useNavigate pour naviguer vers une page.
  const navigate = useNavigate();

  /*  De cette manière, je créer un objet avec tous les attribus d'un utilisateur.
    Une autre façon de faire est possible et c'est l'autre façon qu'on va utiliser. 

const [userProfile, setUserProfile] = useState([]);

  const useReference = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    message: "",
  }; */

  // Je crée toutes les constantes nécessaire à chacun des utilisateurs.
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Cette fonction asyncrone permet d'envoyer les informations de l'utilisateur à l'API.
  // La fonctione se déclenche lorsque l'utilisateur souhaite s'inscrire et clique sur « Je m'inscris ».
  async function handleSubmitSignUp(e) {
    // J'empêche l'action par défaut de se déclenche.
    // L'action initiale est le recharchement de la page. La page ne se rechargera pas lorsque l'utulisateur clique sur « Je m'inscris ».
    e.preventDefault();

    // Source ++ : https://javascript.info/try-catch
    // Source : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/try...catch
    // L'instruction try...catch regroupe des instructions à exécuter et définit une réponse si l'une de ces instructions provoque une exception.
    // Dans le « try » on définit les instructions qu'on souhaite exécuter.
    try {
      // Je crée une variable « user » sous la forme d'un objet qui contient tous les attributs d'un utilisateur.
      let user = {
        firstname: firstName,
        lastname: lastName,
        email: email,
        password: password,
      };

      // Je crée la constante option qui (fait quoi ?)
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      };

      // Source : https://community.lebocal.academy/private/resources/Reque%CC%82tes%20asynchrones.pdf
      // Je crée la constante « result » qui sera le résultat de la promesse (informations que je recevrais de l'API) en utilisant le mot clef « await ».
      // Qu'est ce qu'une promesse ? Source : https://developer.mozilla.org/fr/docs/Learn/JavaScript/Asynchronous/Promises
      let result = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/lemien/register",
        options
      );

      // Source : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/await
      // Await permet d’attendre qu’une fonction ait fini de s’exécuter et permet de récupérer la valeur retournée dans le cas d’une promesse résolue. Dans le cas d’une promesse rejetée, await ne récupèrera aucune valeur.
      // Je détermine que « result » est le résultat de la promesse (information que je recevrais de l'API)
      result = await result.json();

      // Je logue dans ma console le résultat des informations reçues de la l'API.
      console.log(result);

      // Je crée une condition qui est la suivante :
      // Si l'inscription est validé par le l'API, patiente 2 secondes et redirige l'utilisateur vers la page /login.
      //
      if (
        result.success &&
        setTimeout(() => {
          navigate("/login");
        }, 2000)
      ) {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setMessage("L'utilisateur a été créé avec succès");
      }
      // Lorsque que l'inscription est validé, la condition récupére l'ensemble des variables d'états de l'utilisateur et affiche le messge « L'utilisateur a été créé avec succès ».
      // S'il n'y a pas eu d'erreur, alors catch (err) est ignoré : l'exécution atteint la fin de try et continue, en sautant catch.
      else {
        setMessage("Une erreur s'est produite");

        // Source ++ : https://javascript.info/try-catch
        // Si une erreur se produit, alors l'exécution du try est arrêtée, et le contrôle passe au début du catch (error).
        // La variable error (nous pouvons utiliser n'importe quel nom pour elle) contiendra un objet d'erreur avec des détails sur ce qui s'est passé.
      }
    } catch (error) {
      console.error(error);
    }

    // Lors de l'inscription, je souhaite que la console affiche tous les attributs de l'utilisateur.
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
            <button type="submit" className="sign-up-btn">
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
