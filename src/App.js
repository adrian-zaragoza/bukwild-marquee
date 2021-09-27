import { Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';
import './page.scss';
import './navigation_bar.scss';
import React from 'react';
import Page from './components/page';
import NavigationBar from './components/navigation_bar';
import { pages } from './data/pages.json';

const App = () => {
  let pagesTitles = [];

  pages.forEach((page) => {
    pagesTitles.push([page.title, page.slug]);
  });

  

  return(
  <div className="App">
    <NavigationBar pagesTitles={pagesTitles}/>
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

export default App;
