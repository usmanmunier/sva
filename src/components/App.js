import React, {Component} from "react";
import Navigation from './Navigation';
import { Switch, Route } from 'react-router-dom'
import '../assets/css/App.scss';

import Home from "./Home";
import Sponsor from "./Sponsor";
import About from "./About";
import Programs from "./Programs";

class App extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }
    render(){
        return(
            <div>
                <Navigation />
                <Switch>
                  <Route exact path='/' component={Home}/>
                  <Route exact path='/aboutus' component={About}/>
                  <Route exact path='/sponsors' component={Sponsor}/>
                  <Route exact path='/programs' component={Programs}/>
                </Switch>
            </div>
        );
    }
}

export default App;
