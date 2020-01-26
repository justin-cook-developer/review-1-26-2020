import React, { useState, useEffect } from "react";

import CreatePost from "./CreatePost";
import { fetchInitialPosts, deletePost } from "./api";

import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  // useEffect's cb can only return a function
  useEffect(() => {
    fetchInitialPosts().then((posts) => {
      setPosts(posts);
    });
  }, []);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  const removePost = (postId) => {
    setPosts(posts.filter((_post) => _post.id !== postId));
  };

  const createDeletePost = (post) => () => {
    deletePost(post.id).then((success) => {
      if (success) {
        removePost(post.id);
      }
    });
  };

  return (
    <div className="App">
      <h1>Posts</h1>
      <CreatePost addPost={addPost} />
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id} className="mb-5">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <p>
                <button onClick={createDeletePost(post)}>Delete me</button>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
