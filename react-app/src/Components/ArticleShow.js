import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import './ArticleShow.css';

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const ArticleShow = ({ location }) => {
  const { id } = useParams();
  let history = useHistory();

  const handleDelete = async () => {
    axios
      .delete(
        `http://ec2-3-249-202-253.eu-west-1.compute.amazonaws.com/articles/${id}`
      )
      .then(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
    history.push('/');
  };

  return (
    <div>
      <Container>
        <Button variant="danger" onClick={() => handleDelete()}>
          Delete{' '}
        </Button>
        <Button
          onClick={() => {
            history.push(id + '/edit');
          }}
          style={{ marginLeft: '10px' }}
        >
          Edit{' '}
        </Button>
        <Button
          onClick={() => {
            history.push('/');
          }}
          variant="warning"
          style={{ marginLeft: '10px' }}
        >
          Back{' '}
        </Button>

        <h1>{location.articles.title}</h1>
        <div>
          <p>{location.articles.description}</p>
          <p>By: {location.articles.author}</p>
        </div>
        <p>{location.articles.body}</p>
      </Container>
    </div>
  );
};

export default ArticleShow;
