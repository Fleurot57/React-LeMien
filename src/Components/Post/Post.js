import './Post.css';
import Like from '../Like/Like';
import Comment from '../Comment/Comment';




function Post({user, lePost }){
    return(

        <div className="post">
            <h3>{user}</h3>
            <p>{lePost}</p>
             <Like/>
             <Comment/>
        
        </div>

    )
};

export default Post;