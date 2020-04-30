import React from 'react'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import ShowNews from './components/items/ShowNews'
import Business from './components/items/categories/Business'
import Entertainment from './components/items/categories/Entertainment'
import General from './components/items/categories/General'
import Health from './components/items/categories/Health'
import Science from './components/items/categories/Science'
import Sports from './components/items/categories/Sports'
import Technology from './components/items/categories/Technology'
import Footer from './components/common/Footer'


const App = () => {


  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/news/business" component={Business} />
        <Route path="/news/entertainment" component={Entertainment} />
        <Route path="/news/general" component={General} />
        <Route path="/news/health" component={Health} />
        <Route path="/news/science" component={Science} />
        <Route path="/news/sports" component={Sports} />
        <Route path="/news/technology" component={Technology} />
        <Route path="/news" component={ShowNews} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App
