import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { BlogContext } from '../App';

function Blogdetails() {
  const { id } = useParams(); 
  const { blogs } = useContext(BlogContext);


  const blog = blogs.find((post, index) => index === parseInt(id));

  if (!blog) {
    return <h2>Blog not found.</h2>;
  }

  return (
    <div style={{ padding: '20px', backgroundColor:"grey",height: "200px",width: "700px" }}>
      <u>Title</u>
      <h1>{blog.title}</h1>
      <u>Body</u>
      <p>{blog.blog}</p>
    </div>
  );
}

export default Blogdetails;
