import './Profil.css';
import { useEffect, useState } from 'react';

function Profil() {

  const [firstname, setfirstname] = useState([])

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "bearer token"
    },
  };

  const data = async () => {
    const result = await fetch(
      "https://social-network-api.osc-fr1.scalingo.io/lemien/register", options)

  result = (await result.json());
}

useEffect(() => {
  data()
}, [])


    return (
        <ul>
          <li key={data.id}>test : {options.firstname}</li>
        </ul>
    );

  }

export default Profil;
