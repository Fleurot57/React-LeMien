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
        <div>
            <textarea onChange={textAreaChange} type='text' placeholder='Add comment'></textarea>
            <button onClick={handleClick}>Share</button>
            {commentsList.map(displayComment => <Commentaire content= {displayComment}/>)}
        </div>
    )
};
export default CommentBox;