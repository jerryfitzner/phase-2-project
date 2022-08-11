// import logo from './logo.svg';
import '../App.css';
import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Home from './Home';
import Needs from './Needs';
import Requestform from './Reliefform';



function App() {
  const [needs, setNeeds] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/needs')
    .then(resp => resp.json())
    .then(storedNeeds => setNeeds(storedNeeds))
  },[]);

  const needCallback = (needRequest) => {
    setNeeds([...needs, needRequest])
  };

  return (
    <div>
      
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/needs">
            <Needs needs={needs}/>
          </Route>
          <Route exact path="/requestform">
            <Requestform needCallback={needCallback}/>
          </Route> 
        </Switch>
      </div>
      
    </div>
  );
}

export default App;
