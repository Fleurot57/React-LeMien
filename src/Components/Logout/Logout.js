import "./Logout.css";
import { useNavigation } from "react-router-dom";

//Roger
//Link de redirection à la déconnection

function Logout() {
  const history = useNavigation();

  function handleClickLogout(e) {
    localStorage.removeItem("token");
    history.reload();
  }

  return (
    <div>
      <button onClick={handleClickLogout} id="log-out-btn">
        ❌
      </button>
    </div>
  );
}

export default Logout;
