import React from 'react';
import './MainPage.css';

const MainPage = () => {
  return (
    <div className="container">
      <header>
        <h1>Main Page</h1>
        <nav>
          <ul>
            <li>Course</li>
            <li>Job</li>
            <li>News</li>
            <li>Calendar</li>
            <li>Support</li>
            <li><button>Sign out</button></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="courses-section">
          <h2>Computer Science | 2024 Winter Term</h2>
          <p>46 class section(s) found</p>
          {/* Course list here */}
        </section>
        <aside className="sidebar">
          {/* Sidebar content here */}
        </aside>
      </main>
    </div>
  );
};

export default MainPage;