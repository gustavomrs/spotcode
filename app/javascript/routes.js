import React from 'react';
import HomeScreen from './screens/home';
import DiscoveryScreen from './screens/discovery';
import { Switch, Route } from 'react-router-dom'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={HomeScreen}></Route>
    <Route exact path='/discovery' component={DiscoveryScreen}></Route>
  </Switch>
)

export default Routes;