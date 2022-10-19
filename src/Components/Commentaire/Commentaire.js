import React from 'react'
import './Commentaire.css'

function Commentaire(props) {

  return (
    <div>
         <p>{props.content}</p>
    </div>
  )
}

export default Commentaire;