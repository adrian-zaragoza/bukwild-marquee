import { Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';
import './page.scss';
import './navigation_bar.scss';
import React from 'react';
import Page from './components/page'
import NavigationBar from './components/navigation_bar';
import { withRouter } from 'react-router';
import { pages } from './data/pages.json';

const App = ({ location }) => {
  let pagesTitles = [];

  pages.forEach((page, index) => {
    pagesTitles.push([page.title, page.slug]);
  });

  return(
  <div className="App">
    <NavigationBar pathname={location.pathname} pagesTitles={pagesTitles}/>
    <Switch> 
      {pages.map((pageData) =>(
        <Route key={pageData.title} path={`/${pageData.slug}`}>
          <Page pageData={pageData.blocks[0]} />
        </Route>
      ))}
      <Redirect to="/industries" />
    </Switch>
  </div>
  );
}

export default withRouter(App);
