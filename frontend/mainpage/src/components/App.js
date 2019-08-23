import React from 'react';
import Display from './display.js';
import BenchProgress from './benchProgress';
import SquatProgress from './squatProgress';
import OhpProgress from './ohpProgress';
import DliftProgress from './dliftProgress';
import BbrowProgress from './bbrowProgress';
import WeightProgress from './weightProgress';
import { BrowserRouter as Router, Route } from "react-router-dom"; 

class App extends React.Component {

    render(){
        return(
            <Router>
                <div>
                <Route path="/" exact component = {Display}/>
                <Route path="/benchprogress" component = {BenchProgress} />
                <Route path="/squatprogress" component = {SquatProgress} />
                <Route path="/ohpprogress" component = {OhpProgress} />
                <Route path="/dliftprogress" component = {DliftProgress} />
                <Route path="/bbrowprogress" component = {BbrowProgress} />
                <Route path="/weightprogress" component = {WeightProgress} />
                </div>
            </Router>
        );
    }
}

export default App;