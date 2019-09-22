import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navigator from './components/navigator';
import Footer from './components/footer';
import Registration from './pages/register';
import Home from './pages/home';
import Login from './pages/login';
import TeamsAndSchedule from './pages/teams_and_schedule';


function App() {
  return (
    <div>
      <Router>
      <Navigator />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Registration} />
          <Route path="/login" component={Login} />
          <Route path="/teams_and_schedule" component={TeamsAndSchedule} />
        </Switch>
      </Router>    
      <Footer />  
    </div>
  

  


  );
}

export default App;
