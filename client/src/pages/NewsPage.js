import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';
import '../style/NewsPage.css';
import NavBar from "../components/NavBar.js";

function News() {
  // Manually entered news articles
  // const articles = [
  //   {
  //     title: "CUNY Opens New Tech Center",
  //     content: "The City University of New York has announced the opening of a new technology center...",
  //     author: "Jane Doe",
  //     date: "2023-12-13"
  //   },
  //   // ... other articles
  // ];

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const scraper = async () => {
      try {
        const response = await axios.get('https://www1.cuny.edu/mu/forum/');
        const $ = cheerio.load(response.data);

        const scrapedArticles = $('.vc_col-sm-12').map((index, element) => {
          const title = $(element).find('h2 a').text().trim();
          const content = $(element).find('.entry-content p:first-child').text().trim();
          const date = $(element).find('.date').text().trim();

          return {
            title,
            content,
            date,
          };
        }).get();

        setArticles(scrapedArticles);
      } catch (error) {
        console.error('Error scraping website:', error);
      }
    };

    scraper();
  }, []);

  return (
    <div className="news-container">
      <NavBar />
      {articles
        .filter(article => article.content) // Filter out articles that don't have content
        .map((article, index) => (
          <article key={index} className="news-article">
            <h2 className="news-title">{article.title}</h2>
            <p className="news-content">{article.content}</p>
            <div className="news-meta">
              <time className="news-date">{article.date}</time>
            </div>
          </article>
        ))}
    </div>
  );
  
}

export default News;