import React from 'react';
import './App.css';
import Syllabus from './syllabus';
import Instructor from './instructor';
import Class from './class'; 
import ClassSection from './classSection';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/syllabus" component={Syllabus} />
            <Route path="/instructor" component={Instructor} />
            <Route path="/class" component={Class} />
          <Route path="/sections" component={ClassSection} />
        </Switch> 
      </div>
    </Router>
  );
}

export default App;
