import './Post.css';


function Post({user, lePost }){
    return(
        <li className="post">
            <h3>{user}</h3>
            <p>{lePost}</p>
        </li>
    )
};

export default Post;