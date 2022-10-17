import './CreatePost.css';
import {useEffect, useState } from "react";
import AddPosts from '../../Components/AddPosts/AddPosts';



function CreatePost() {

  const [newPost, setNewPost] = useState("");
  const [PostsList, setPostsList] = useState([]);


 

  function addPost () {
    PostsList.push(newPost);
    console.log(newPost)
    setPostsList(PostsList);
    console.log(PostsList)
    setNewPost("")
   
    };

    function textAreaChange (e) {
      setNewPost(e.target.value)
    };

    async function postPosts() { 
      
      const options = {
        method: "POST",
        headers: {"Content-Type": "application/json",  "Authorization": "bearer token"},   
        body: JSON.stringify({
          title: "userName",
          content: newPost,
        })
    };
    
   
      const response = await fetch("https://social-network-api.osc-fr1.scalingo.io/LeMien/post",options);
      let data = await response.json();
  
      const newPost = data.newPost;
      console.log(newPost);
      setNewPost(newPost);
    };
    useEffect(() => {postPosts()}, []);

  return (
    <div className='addPostSection'>

      <h3>Create Post</h3>
      
      <p className='userName'>user:</p>
      
      <div > 
        <form id="addPostForm" onSubmit={ e=>e.preventDefault()}>
          <textarea onChange={textAreaChange} defaultValue="What's on your mind"></textarea>
          <button onClick={addPost}>Share</button>
        </form>

        {PostsList.map((displayPost, index) => <AddPosts key= {index} content= {displayPost}/>)}
      </div>


    </div>
  );
}

export default CreatePost;
