import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Post from './components/Post';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [blogType, setBlogType] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getTravelPosts = async () => {
    try {
      const response = await axios('http://localhost:5000/api/posts/travel');
      if (response.status !== 200) {
        return;
      }
      setBlogType('Travel Blog');
      setPosts(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getFoodPosts = async () => {
    try {
      const response = await axios('http://localhost:5000/api/posts/food');
      if (response.status !== 200) {
        return;
      }
      setBlogType('Food Blog');
      setPosts(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTravelPosts();
  }, []);

  const showFoodBlog = () => {
    getFoodPosts();
  };

  return (
    <div class="container">
      <h1>{blogType}</h1>
      <button onClick={() => showFoodBlog()}>Food Blog</button>
      <button onClick={() => getTravelPosts()}>Travel Blog</button>
      {posts.map((post, index) => (
        <Post
          title={post.title}
          description={post.description}
          image={post.image}
          index={index}
        />
      ))}
    </div>
  );
};

export default App;
