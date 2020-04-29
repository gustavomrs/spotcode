import React from 'react';
import HomeScreen from './screens/home';
import DiscoveryScreen from './screens/discovery';
import FavoritesScreen from './screens/favorites';
import { Switch, Route } from 'react-router-dom'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={HomeScreen}></Route>
    <Route exact path='/discovery' component={DiscoveryScreen}></Route>
    <Route exact path='/favorites' component={FavoritesScreen}></Route>
  </Switch>
)

export default Routes;