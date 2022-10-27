import './CommentBox.css';
import { useState } from "react";
import Commentaire from '../Commentaire/Commentaire';


function CommentBox () {

    const [newComment, setNewComment] = useState("");
    const [commentsList, setCommentsList] = useState([]);

    function handleClick () {

        commentsList.push(newComment);
        setCommentsList(commentsList);
        setNewComment("");
        console.log(newComment)
    };

    function textAreaChange (e) {
        setNewComment(e.target.value);
        
    };
  


    return(
        <div class="box">
            <textarea class="boxComment" onChange={textAreaChange} type='text' placeholder='Add comment'></textarea>
            <img alt="add" class="buttonComment" onClick={handleClick} src="https://cdn-icons-png.flaticon.com/512/5678/5678349.png"></img>
            {commentsList.map(displayComment => <Commentaire content= {displayComment}/>)}
        </div>
    )
};
export default CommentBox;