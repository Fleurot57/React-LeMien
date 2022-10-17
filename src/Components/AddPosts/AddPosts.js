import './AddPosts.css';


function AddPosts(props){
    return(
        <div className="AddPost">
            <p>{props.content}</p>
        </div>
    )
};

export default AddPosts;