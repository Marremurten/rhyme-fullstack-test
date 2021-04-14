import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import "./ArticleShow.css";

axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

const ArticleShow = ({ location }) => {
  const [article, setArticle] = useState({});
  const { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/${id}`)
      .then(res => {
        setArticle(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, article);

  const handleDelete = async () => {
    axios.delete(`http://localhost:5000/${id}`).then(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
    history.push("/");
  };

  return (
    <div>
      <Container>
        <Button variant='danger' onClick={() => handleDelete()}>
          Delete{" "}
        </Button>
        <Button
          onClick={() => {
            history.push(id + "/edit");
          }}
          style={{ marginLeft: "10px" }}
        >
          Edit{" "}
        </Button>
        <Button
          onClick={() => {
            history.push("/");
          }}
          variant='warning'
          style={{ marginLeft: "10px" }}
        >
          Back{" "}
        </Button>

        <h1>{article.title}</h1>
        <div>
          <p>{article.description}</p>
          <p>By: {article.author}</p>
        </div>
        <p>{article.body}</p>
      </Container>
    </div>
  );
};

export default ArticleShow;
