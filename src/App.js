import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './components/HomePage'
import Gallery from './components/Gallery'

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
    </Switch>
    </Router>
    )
}

export default App