import axios from "axios";

const API = "https://jsonplaceholder.typicode.com";

export const fetchInitialPosts = async () => {
  try {
    const response = await axios.get(`${API}/posts`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createPost = async (title, body) => {
  try {
    const response = await axios.post(`${API}/posts`, {
      title,
      body,
      userId: 1,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deletePost = async (postId) => {
  try {
    const response = await axios.delete(`${API}/posts/${postId}`);
    return response.status === 200;
  } catch (error) {
    console.error(error);
  }
};
