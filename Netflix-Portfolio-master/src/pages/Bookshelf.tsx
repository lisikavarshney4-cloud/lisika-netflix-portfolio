import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaPlay } from 'react-icons/fa';
import './Bookshelf.css';

// 📚 IMAGES
import caseStudyImg from '../images/case-study.png';
import visualGalleryImg from '../images/visual-gallery.png';
import skillsImg from '../images/skills.png';

const bookCategories = [
  {
    category: "Brand Strategy & Growth",
    books: [
      { title: "Building a StoryBrand", author: "Donald Miller", cover: caseStudyImg, takeaway: "Clarify your message so customers listen." },
      { title: "Contagious", author: "Jonah Berger", cover: visualGalleryImg, takeaway: "Why things catch on in internet culture." },
      { title: "Positioning", author: "Al Ries", cover: skillsImg, takeaway: "The battle for your mind." },
      { title: "Hooked", author: "Nir Eyal", cover: caseStudyImg, takeaway: "Building habit-forming products." }
    ]
  },
  {
    category: "Creative Aesthetics & Story",
    books: [
      { title: "The Creative Act", author: "Rick Rubin", cover: visualGalleryImg, takeaway: "A way of being in the creative process." },
      { title: "Steal Like an Artist", author: "Austin Kleon", cover: skillsImg, takeaway: "10 things nobody told you about being creative." },
      { title: "Save the Cat!", author: "Blake Snyder", cover: caseStudyImg, takeaway: "The ultimate guide to cinematic storytelling." },
      { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", cover: visualGalleryImg, takeaway: "The psychology of human decision making." }
    ]
  }
];

const Bookshelf: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bookshelf-container">
      {/* 🎬 BACK BUTTON & HEADER */}
      <div className="bookshelf-nav">
        <button className="back-button" onClick={() => navigate(-1)}>
          <FaArrowLeft /> Back to Profile
        </button>
      </div>

      <div className="bookshelf-hero">
        <h1 className="hero-title">The Bookshelf</h1>
        <p className="hero-description">
          The strategies, stories, and internet culture deep-dives that wire my brain. 
          Here is what I read to build better digital experiences.
        </p>
      </div>

      {/* 📚 BOOK ROWS (Netflix Style) */}
      <div className="bookshelf-content">
        {bookCategories.map((row, index) => (
          <div key={index} className="book-row-section">
            <h2 className="book-row-title">{row.category}</h2>
            <div className="book-row">
              {row.books.map((book, bIndex) => (
                <div key={bIndex} className="book-card">
                  <img src={book.cover} alt={book.title} className="book-cover" />
                  <div className="book-card-overlay">
                    <h3 className="book-title">{book.title}</h3>
                    <p className="book-author">by {book.author}</p>
                    <p className="book-takeaway">"{book.takeaway}"</p>
                    <button className="read-notes-btn">
                      <FaPlay style={{ fontSize: '0.8rem' }} /> My Notes
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;