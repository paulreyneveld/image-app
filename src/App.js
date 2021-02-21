import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './components/HomePage'
import Gallery from './components/Gallery'
import NotFound from './components/NotFound'

const App = () => {
    return (
    <Router>
    <Switch>
    <Route exact path='/'>
        <Header />
        <HomePage />
    </Route>
    <Route exact path='/gallery'>
        <Header />
        <Gallery />
    </Route>
    <Route>
        <NotFound />
    </Route>
    </Switch>
    </Router>
    )
}

export default App