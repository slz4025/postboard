import React, { useEffect, useState } from "react";

import './style.css';
import { serverPoint } from "./global";
import Post from "./post";
import AddPost from "./addPost";
import ErrorBox from "./errorBox";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      const endpoint = `${serverPoint}/posts`;
      const resp = await fetch(endpoint);
      const postsResp = await resp.json();
      const postObjs = postsResp.map((e) => JSON.parse(e));
      setPosts(postObjs);
    };

    getPosts();
  }, []);

  return (
    <div class="posts">
      {error && (<ErrorBox error={error} />)}
      <h1>Postboard</h1>
      {posts.map((post) => (
        <Post post={post} />
      ))}
      <AddPost posts={posts} setPosts={setPosts} setError={setError} />
    </div>
  );
};

export default Posts;
