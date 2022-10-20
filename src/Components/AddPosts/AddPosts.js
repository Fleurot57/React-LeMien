import './AddPosts.css';
import Like from "../Like/Like";
import CommentBox from "../CommentBox/CommentBox";





function AddPosts({title, content, _id}){
    return(
        <div className="AddPost">
            <h3>{title}</h3>
            <p>{content}</p>
            <Like/>
            <CommentBox/>

        </div>
    )
};

export default AddPosts;