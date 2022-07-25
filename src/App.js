import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Needs from './Needs';
import Requestform from './Reliefform';


function App() {
  return (
    <div>
      
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/needs">
            <Needs />
          </Route>
          <Route exact path="/requestform">
            <Requestform/>
          </Route> 
        </Switch>
      </div>
      
    </div>
  );
}

export default App;
