
import './Profil.css';
import AddPosts from "../../Components/AddPosts/AddPosts"
import { useEffect, useState } from "react";

// récupérer post du serveur et filtrer avec id 

function Profil() {
  const [PostsList, setPostsList] = useState([]);
  
  async function getMyPosts() { 
    const options = {
      method: "GET",
      headers: {"Content-Type": "application/json"}
      
    }

    const response = await fetch("https://social-network-api.osc-fr1.scalingo.io/LeMien/posts?", options);
    let data = await response.json();

    const PostsList = data.PostsList;
    console.log(PostsList);
    setPostsList(PostsList);
  };

  useEffect(() => {getMyPosts()}, []);



  return (
    <div>
      <p>My Profil</p>
      {PostsList.map((post, index) => <AddPosts key= {index} MyUserName={post.title} MyPost={post.content}/> )} 
    </div>
  );
}

export default Profil;
