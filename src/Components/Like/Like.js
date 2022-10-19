import './Like.css';
import { useState } from "react";


function Like () {
    let [likes, setLikes] = useState(0);
    
    
    function handleClick (){
        likes = likes+1
        setLikes(likes)
    }

    return(
        <div>
            <p>Vous avez {likes} like</p>
            <button onClick={handleClick}>Like</button>
        </div>
    )
};
export default Like;