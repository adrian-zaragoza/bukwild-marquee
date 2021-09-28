import { Route, Switch, Redirect } from 'react-router-dom';
import { useSpring, animated, config } from 'react-spring';
import React, { useState } from 'react';
import './stylesheets/App.scss';
import './stylesheets/page.scss';
import './stylesheets/navigation_bar.scss';
import Page from './components/page_component/page';
import NavigationBar from './components/navigation_bar_component/navigation_bar';
import { pages } from './data/pages.json';

const AnimatedPage = animated(Page);

const App = () => {
  const [party, setParty] = useState(false);
  const [music] = useState(new Audio("/We_Like_To_Party.mp3"))

  let pagesTitles = [];
  pages.forEach((page) => {
    pagesTitles.push([page.title, page.slug]);
  });

  const partyController = (e) => {
    e.preventDefault();

    if(party){
      setParty(false);
      music.pause();
    }else{
      music.play();
      setParty(true);
    }
  }


  let props = useSpring({
    loop: party,
    to: [
      { opacity: party ? 0 : 1, color: party ? '#D12229' : "#FFFFFF" },
      { opacity: party ? 1 : 1, color: party ? '#F68A1E' : "#FFFFFF" },
      { opacity: party ? 0 : 1, color: party ? '#FDE01A' : "#FFFFFF" },
      { opacity: party ? 1 : 1, color: party ? '#007940' : "#FFFFFF" },
      { opacity: party ? 0 : 1, color: party ? '#24408E' : "#FFFFFF" },
      { opacity: party ? 1 : 1, color: party ? '#732982' : "#FFFFFF" },
    ],
    config: config.stiff,
  });

  let callToActionProps = useSpring({
    loop: party,
    to: [
      { opacity: party ? 0 : 1, color: party ? '#D12229' : "#000000" },
      { opacity: party ? 1 : 1, color: party ? '#F68A1E' : "#000000" },
      { opacity: party ? 0 : 1, color: party ? '#FDE01A' : "#000000" },
      { opacity: party ? 1 : 1, color: party ? '#007940' : "#000000" },
      { opacity: party ? 0 : 1, color: party ? '#24408E' : "#000000" },
      { opacity: party ? 1 : 1, color: party ? '#732982' : "#000000" },
    ],
    config: config.stiff
  });



  return(
  
  <div className="App">
    <NavigationBar partyController={partyController}pagesTitles={pagesTitles}/>
    <Switch> 
      {pages.map((pageData) =>(
        <Route key={pageData.title} path={`/${pageData.slug}`}>
          <AnimatedPage style={props} pageData={pageData.blocks[0]} party={party} callToActionStyle={callToActionProps} />
        </Route>
      ))}
      <Redirect to="/industries" />
    </Switch>
  </div>
  
  );
}

export default App;
