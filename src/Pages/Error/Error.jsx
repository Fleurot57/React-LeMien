import "./Error.css";
import { Link } from "react-router-dom";
//Damien
//Formulaire login: input(mail), input(mdp)
//Boutton : Login

function Error() {
  return (
    <section>
      <div className="error-contain">
        <div className="error-text">
          <Link to="/">
            <h1>404</h1>
            <p>Page not found.</p>
            <p>Aller à l'accueil</p>
          </Link>
        </div>
        <div className="binoculars">
          <div className="back-bino"></div>
          <div className="left-bino"></div>
          <div className="right-bino"></div>
          <div className="left-bino-lense">
            <div className="eye"></div>
          </div>
          <div className="right-bino-lense">
            <div className="eye"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Error;
