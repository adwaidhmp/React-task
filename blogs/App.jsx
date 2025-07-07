/* eslint-disable react-refresh/only-export-components */
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Blog from './rout/blog';
import Posts from './rout/posts';
import Blogdetails from './rout/Blogdetails';

import { createContext, useState } from 'react';


export const BlogContext = createContext();


export function BlogProvider({ children }) {
  const [blogs, setblogs] = useState([]);

  return (
    <BlogContext.Provider value={{ blogs, setblogs }}>
      {children}
    </BlogContext.Provider>
  );
}

function App() {
  return (
    <div className="main">
      <BlogProvider>
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/blogs/:id" element={<Blogdetails />} />
        </Routes>
      </BlogProvider>
    </div>
  );
}

export default App;
