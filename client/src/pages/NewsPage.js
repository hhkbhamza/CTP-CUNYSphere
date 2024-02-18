// import React from 'react';
// import { Link } from 'react-router-dom';
// import "../pages/style/NewsPage.css";
// import NavBar from "../components/NavBar.js";

// const NewsPage = () => {
//   // This would be populated by your CMS or API in a real application
//   const newsArticles = [
//     {
//       title: 'CUNY Research Breakthrough',
//       summary: 'Latest research from CUNY has made headlines...',
//       image: 'url_to_image',
//       articleLink: '/news/cuny-research-breakthrough'
//     },
//     // ...more articles
//   ];

//   return (
//     <div className="news-container">
//       <NavBar/>
//       <h1 className="news-header">Latest News at CUNY</h1>
//       <section className="news-articles">
//         {newsArticles.map((article, index) => (
//           <article key={index} className="news-article">
//             <img src={article.image} alt={article.title} className="news-image" />
//             <h2 className="article-title">{article.title}</h2>
//             <p className="article-summary">{article.summary}</p>
//             <Link to={article.articleLink} className="read-more">Read More</Link>
//           </article>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default NewsPage;

// News.js
import React from 'react';
import '../style/NewsPage.css';
import NavBar from "../components/NavBar.js";

function News() {
  // Manually entered news articles
  const articles = [
    {
      title: "CUNY Opens New Tech Center",
      content: "The City University of New York has announced the opening of a new technology center...",
      author: "Jane Doe",
      date: "2023-12-13"
    },
    // ... other articles
  ];

  return (
    <div className="news-container">
      <NavBar />
      {articles.map((article, index) => (
        <article key={index} className="news-article">
          <h2 className="news-title">{article.title}</h2>
          <p className="news-content">{article.content}</p>
          <div className="news-meta">
            <span className="news-author">{article.author}</span>
            <time className="news-date">{article.date}</time>
          </div>
        </article>
      ))}
    </div>
  );
}

export default News;