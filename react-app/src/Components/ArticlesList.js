import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import { Container, Rol, Col, Button } from 'react-bootstrap';
import './ArticlesList.css';

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);

  let history = useHistory();

  useEffect(() => {
    axios
      .get('http://ec2-3-249-202-253.eu-west-1.compute.amazonaws.com/articles')
      .then((res) => {
        setArticles(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, articles);

  return (
    <Container style={{ textAlign: 'center' }}>
      <div className="articles-header">
        <h1>Articles</h1>
      </div>
      <div className="articles-wrapper">
        {articles.map((a) => {
          return (
            <div className="article-card">
              <div className="article-card-header">
                <h3>{a.title}</h3>
                <p>{a.description}</p>
                <p>
                  By: <span>{a.author}</span>
                </p>
              </div>
              <div className="article-card-content">
                <p>{a.body}</p>
              </div>

              <Link
                to={{
                  pathname: '/' + a._id,
                  articles: a,
                }}
              >
                Read more
              </Link>
            </div>
          );
        })}
      </div>
      <Button onClick={() => history.push('/new')}>Add New Article</Button>
    </Container>
  );
};

export default ArticlesList;
