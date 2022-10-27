import React from 'react'
import './Commentaire.css'

function Commentaire(props) {

  return (
    <div class="contentComment">
         <p>{props.content}</p>
    </div>
  )
}

export default Commentaire;