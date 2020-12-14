import React, { useState } from "react";

import "./App.css";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "Phil",
      caption: "Wow it works",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/c/c7/Batman_Infobox.jpg",
    },
    {
      username: "Joe",
      caption: "Cool beans",
      imageUrl:
        "https://www.thehindu.com/entertainment/qh3fnb/article29475886.ece/ALTERNATES/LANDSCAPE_1200/batman-day",
    },
    {
      username: "Mike",
      caption: "What up",
      imageUrl:
        "https://www.lego.com/cdn/cs/set/assets/blt0bf03ae97678db52/Batman2_App_Sidekick-Tall1.jpg?fit=crop&format=jpg&quality=80&width=800&height=600&dpr=1",
    },
  ]);

  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>

      {posts.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
