import "./Logout.css";

//Roger
//Link de redirection à la déconnection

function Logout() {

  function handleClickLogout(e) {
    e.preventDefault();
    localStorage.removeItem("token");
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
