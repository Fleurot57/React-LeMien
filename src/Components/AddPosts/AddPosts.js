import './AddPosts.css';
import Like from "../Like/Like";
import Comment from "../Comment/Comment";





function AddPosts({MyUserName, MyPost }){
    return(
        <div className="AddPost">
            <h3>{MyUserName}</h3>
            <p>{MyPost}</p>
             <Like/>
             <Comment/>

        </div>
    )
};

export default AddPosts;