import React, { Component } from 'react';
import Home from './Home';
import Add from './Add';
import Recipes from './Recipes';
import VeganList from './Categories/Vegan';
import VegetarianList from './Categories/Vegetarian';
import HalalList from './Categories/Halal';
import NonvegList from './Categories/Nonveg';
import GlutenFreeList from './Categories/Gluten';
import FruitList from './Categories/Fruit';
import GeneralList from './Categories/General';
import SweetsList from './Categories/Sweets';
import ShowRecipe from './ShowRecipe';
import Translate from './Translate';
import Loginpage from './Loginpage';
import SignupPage from './SignupPage';
import "./App.css";



import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {
  state = { }
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/add' exact={true} component={Add}/>
          <Route path='/recipes' exact={true} component={Recipes}/>
          <Route path='/show' exact={true} component={ShowRecipe}/>
          <Route path='/info' exact={true} component={Translate}/>
          <Route path='/Loginpage' exact={true} component={Loginpage}/>
          <Route path='/SignupPage' exact={true} component={SignupPage}/>
          <Route path='/category/vegan' exact={true} component={VeganList}/>
          <Route path='/category/vegetarian' exact={true} component={VegetarianList}/>
          <Route path='/category/halal' exact={true} component={HalalList}/>
          <Route path='/category/nonveg' exact={true} component={NonvegList}/>
          <Route path='/category/glutenfree' exact={true} component={GlutenFreeList}/>
          <Route path='/category/fruit' exact={true} component={FruitList}/>
          <Route path='/category/general' exact={true} component={GeneralList}/>
          <Route path='/category/sweets' exact={true} component={SweetsList}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
