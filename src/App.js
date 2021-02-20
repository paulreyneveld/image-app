import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './components/HomePage'

const App = () => {
    return (
    <Router>
        <Header />
        <HomePage />
    </Router>
    )
}

export default App