import './Like.css';
import { useState } from "react";


function Like () {
    let [likes, setLikes] = useState(0);
    
    
    function handleClick (){
        likes = likes+1
        setLikes(likes)
    }

    return(
        <div class="boxLike">
            <img onClick={handleClick} class="buttonLike" src="https://cdn-icons-png.flaticon.com/512/1246/1246261.png"></img>
            <p>Vous avez {likes} like</p>
        </div>
    )
};
export default Like;