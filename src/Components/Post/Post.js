import './Post.css';
import Like from "../Like/Like";
import Comment from "../CommentBox/CommentBox";





function Post({title, content}){

 

    return(

        <div className="post">
            <h3>{title}</h3>
            <p>{content}</p>
            <Like/>
            <Comment/>
  
        
        </div>

    )
};

export default Post;