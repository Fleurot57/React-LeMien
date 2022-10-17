import './ViewPost.css';
import Post from '../Post/Post';
import { useEffect, useState } from "react";


//laura

//Affichage des posts : GETPOST

//Si connecté :
//Une function AddLike pour chaque post
//Une function AddComment pour chaque post

//Si pas connecté
//Ne peut pas liker et commenter
//Ne peut voir que nombre de commentaires et de likes

function ViewPost() {

  const [posts, setPosts] = useState([]);

  async function getPosts() { 
      const options = {
        method: "GET",
        headers: {"Content-Type": "application/json"}
        
      }

    const response = await fetch("https://social-network-api.osc-fr1.scalingo.io/LeMien/posts?page=1&limit=15", options);
    let data = await response.json();

    const posts = data.posts;
    console.log(posts);
    setPosts(posts);
  };

  useEffect(() => {getPosts()}, []);


  return (
    <div>
      <h2>Feeds</h2>
      <ul>
        {posts.map((post, index) => < Post key={index} user={post.user} lePost={post.lePost} />)}
      </ul>
    </div>
  );
}

export default ViewPost;
