import React from 'react'
import './app.css'
import { Route, Switch } from 'react-router-dom'
import { HomePage, CartPage } from '../pages'

const App = () => {
  return (
    <Switch>
      <Route
        exact path="/"
        component={HomePage}
      />
      <Route path="/cart" component={CartPage} />
    </Switch>
  )
};

export default App;
