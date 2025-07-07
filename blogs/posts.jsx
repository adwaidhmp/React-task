import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BlogContext } from '../App'; 

function Posts() {
  const { blogs } = useContext(BlogContext); 
  const navigate = useNavigate();

  function nav(index) {
    navigate(`/blogs/${index}`);
  }

  function nt() {
    navigate('/');
  }

  return (
    <div>
      <h1>
        All Blog Posts
        <button onClick={nt} className="btn">Post New Blog</button>
      </h1>

      {blogs.length === 0 ? (
        <p style={{ color: "gray" }}>No blog posts available.</p>
      ) : (
        blogs.map((post,i) => (
          <div
            key={i}
            style={{border: "1px solid black",margin: "10px",padding: "10px",height: "200px",
            width: "700px",color: "yellow",backgroundColor: "grey",cursor: "pointer"}}
            onClick={() => nav(i)}
          >
            <u>Title</u>
            <h3>{post.title}</h3>
            <u>Body</u>
            <h4>{post.blog}</h4>
          </div>
        ))
      )}
    </div>
  );
}

export default Posts;
