import { Route, Switch, Redirect } from 'react-router-dom';
import { useSpring, animated, config } from 'react-spring';
import React, { useState } from 'react';
import './stylesheets/App.scss';
import './stylesheets/page.scss';
import './stylesheets/navigation_bar.scss';
import Page from './components/page_component/page';
import NavigationBar from './components/navigation_bar_component/navigation_bar';
import { pages } from './data/pages.json';

//Animating the Page component using animated from react-spring
const AnimatedPage = animated(Page);

const App = () => {
  //state of party and music to toggle the animation and music with click
  const [party, setParty] = useState(false);
  const [music] = useState(new Audio("/We_Like_To_Party.mp3"))

  //creating an array of each [ title, slug] to pass to navigationbar component as props.
  let pagesTitles = [];
  pages.forEach((page) => {
    pagesTitles.push([page.title, page.slug]);
  });

  //partycontroller function sets the state for party and also pauses and plays the music depending on the party state
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

  //the props are for the div with a className of "heads" in the page component. 
  //the animation will change the text color from white to the rainbow and make text appear and dissapear 
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

  //the callToActionProps are for the call_to_action component inside the page component. 
  //had to create another props specific for call_to_action because the default text color is black instead of white
  //the animation will change the text color from white to the rainbow and make text appear and dissapear 
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
      {/* mapping through the pages to map each page to a Route component and to pass the data via props into the AnimatedPage component */}
      {pages.map((pageData) =>(
        <Route key={pageData.title} path={`/${pageData.slug}`}>
          <AnimatedPage style={props} pageData={pageData.blocks[0]} callToActionStyle={callToActionProps} />
        </Route>
      ))}
      {/* if the path does not match any of the defined paths, it will redirect to the /industries path and show the industries component */}
      <Redirect to="/industries" />
    </Switch>
  </div>
  
  );
}

export default App;
