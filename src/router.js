import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import NotFound from './page/NotFound'
import Questions from './page/Questions';
import Page from './layout/Dashboard/index';
import NewQuestions from './page/NewQuestion'


const Root = () => {
  return (
    <Router>
      <Switch>
        <Redirect from="/" to="/comunidad" exact/>
        <Route path="/comunidad" exact>
          <Page>
            <Questions/>
          </Page>
        </Route>
        <Route path="/comunidad/new">
          <Page hideHeader>
            <NewQuestions/>
          </Page>
        </Route>
        <Route>
          <Page>
            <NotFound/>
          </Page>
        </Route>

      </Switch>
    </Router>
  );
};
export default Root;