import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';

const App = () => {
  return (
    <BrowserRouter>
      <Container maxwidth="xl">
        <Navbar />
        <Switch>
          <Route exact path="/" component={() => <Redirect to="/posts" />} />
          <Route path="/posts" exact component={Home} />
          <Route path="/posts/search" exact component={Home} />
          <Route path="/posts/:id" component={PostDetails} />
          <Route path="/auth" component={Auth} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
