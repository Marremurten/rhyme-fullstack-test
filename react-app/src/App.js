import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ArticlesList from './Components/ArticlesList';
import ArticlesNew from './Components/ArticleNew';
import ArticleShow from './Components/ArticleShow';
import ArticleEdit from './Components/ArticleEdit';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ArticlesList}></Route>
        <Route exact path="/new" component={ArticlesNew}></Route>
        <Route exact path="/:id/edit" component={ArticleEdit}></Route>
        <Route exact path="/:id" component={ArticleShow}></Route>
      </Switch>
    </Router>
  );
};

export default App;
