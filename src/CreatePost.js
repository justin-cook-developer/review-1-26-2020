import React, { useState } from "react";

import { createPost } from "./api";

const CreatePost = ({ addPost }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const makeOnChange = (setState) => (ev) => {
    setState(ev.target.value);
  };

  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        createPost(title, body).then((post) => {
          addPost(post);
          setTitle("");
          setBody("");
        });
      }}
    >
      <div className="mb-5 form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={makeOnChange(setTitle)}
        />
      </div>

      <div className="mb-5 form-group">
        <label htmlFor="body">Body</label>
        <textarea
          name="body"
          id="body"
          value={body}
          onChange={makeOnChange(setBody)}
        />
      </div>

      <div>
        <button type="submit">Create Post</button>
      </div>
    </form>
  );
};

export default CreatePost;
