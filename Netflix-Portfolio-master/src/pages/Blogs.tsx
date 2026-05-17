import React from 'react';
import './Blogs.css';
import { FaMedium, FaDev } from 'react-icons/fa';

const blogs = [
  {
    title: "The Netflix Tech Blog",
    platform: "Medium",
    link: "https://netflixtechblog.com/",
    description: "The Netflix Tech Blog shares insights on Netflix's engineering, AI, cloud infrastructure, and innovations powering its streaming platform.",
    icon: <FaMedium />,
  },
  {
    title: "Level Up Coding",
    platform: "Medium",
    link: "https://levelup.gitconnected.com/",
    description: "Level Up (GitConnected) is a platform featuring developer-focused articles, tutorials, and insights on programming, tech, and software engineering.",
    icon: <FaMedium />,
  },
  {
    title: "Docker for Beginners",
    platform: "Medium",
    link: "https://blog.bitsrc.io/",
    description: "The Bit Blog covers modern web development, JavaScript, React, and component-driven architecture insights.",
    icon: <FaMedium />,
  },
];

const Blogs: React.FC = () => {
  return (
    <div className="blogs-container">
      <h2 className="blogs-title">✍️ Blog Posts</h2>
      <p className="blogs-intro">A collection of best thoughts and tutorials on software development.</p>
      <div className="blogs-grid">
        {blogs.map((blog, index) => (
          <a href={blog.link} key={index} target="_blank" rel="noopener noreferrer" className="blog-card" style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}>
            <div className="blog-icon animated-icon">{blog.icon}</div>
            <div className="blog-info animated-text">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <span className="blog-platform">{blog.platform}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blogs;