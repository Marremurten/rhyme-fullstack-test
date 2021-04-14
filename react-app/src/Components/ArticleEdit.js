import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import './ArticlesNew.css';

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const initialState = {
  title: '',
  description: '',
  author: '',
  body: '',
};
const ArticleEdit = () => {
  const [article, setArticle] = useState(initialState);

  const { id } = useParams();
  let history = useHistory();

  const handleChange = (e) => {
    const newArticle = { ...article };
    newArticle[e.target.id] = e.target.value;
    setArticle(newArticle);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(
        `http://ec2-3-249-202-253.eu-west-1.compute.amazonaws.com/articles/${id}`,
        article
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
    <Container>
      <Row className="new-article-wrapper">
        <Col lg={6} className="new-article-border">
          <h1>Edit Article</h1>
          <Form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                onChange={(e) => handleChange(e)}
                id="title"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                onChange={(e) => handleChange(e)}
                id="description"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Author</Form.Label>
              <Form.Control
                onChange={(e) => handleChange(e)}
                id="author"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Body</Form.Label>
              <Form.Control
                as="textarea"
                onChange={(e) => handleChange(e)}
                id="body"
              ></Form.Control>
            </Form.Group>
            <div>
              <Button type="submit">Change </Button>
              <Button
                type="submit"
                onClick={() => {
                  history.push('/');
                }}
                variant="danger"
                style={{ marginLeft: '10px' }}
              >
                Cancel{' '}
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ArticleEdit;
