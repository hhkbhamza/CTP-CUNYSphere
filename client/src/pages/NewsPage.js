import React from 'react';
import { Link } from 'react-router-dom';
// import './News.css'; // Your CSS file to style the news page

const NewsPage = () => {
  // This would be populated by your CMS or API in a real application
  const newsArticles = [
    {
      title: 'CUNY Research Breakthrough',
      summary: 'Latest research from CUNY has made headlines...',
      image: 'url_to_image',
      articleLink: '/news/cuny-research-breakthrough'
    },
    // ...more articles
  ];

  return (
    <div className="news-container">
      <h1 className="news-header">Latest News at CUNY</h1>
      <section className="news-articles">
        {newsArticles.map((article, index) => (
          <article key={index} className="news-article">
            <img src={article.image} alt={article.title} className="news-image" />
            <h2 className="article-title">{article.title}</h2>
            <p className="article-summary">{article.summary}</p>
            <Link to={article.articleLink} className="read-more">Read More</Link>
          </article>
        ))}
      </section>
    </div>
  );
};

export default NewsPage;