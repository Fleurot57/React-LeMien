import './Profil.css';
import AddPosts from "../../Components/AddPosts/AddPosts"
import { useEffect, useState } from "react";



function Profil() {
  const [PostsList, setPostsList] = useState([]);
  
  async function getMyPosts() { 
    const options = {
      method: "GET",
      headers: {"Content-Type": "application/json"}
      
    }

    const response = await fetch("https://social-network-api.osc-fr1.scalingo.io/LeMien/posts", options);
    let data = await response.json();

    console.log (data);

    const PostsList = data.posts;
    console.log(PostsList);

// je stock que mes posts dans tableau vide
//let mesPosts = []

//condition if post correspond à user id > afficher !
//userId: "634fc412ccaf7f001d95f69f"

    setPostsList(PostsList);
  };
  useEffect(() => {getMyPosts()}, []);
  



  return (
    <div>
      <p>My Profil</p>
      {PostsList.map((post, index) => <AddPosts key= {index} title={post.title} content={post.content}/> )} 
    </div>
  );
}

export default Profil;