import React from 'react'
import Home from './pages/Home';

import {
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <>
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/project:project" exact component={Home} />
          <Route exact component={Home} />
      </Switch>
    </>
  )
}

export default App
