import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../containers/Home/'
import Login from '../containers/Login/'
import NotFound from '../containers/Notfound/'
import Layout from '../layouts/layout'
import { GlobalStyle } from '../Styles/'

const App = () => (

  <BrowserRouter>
    <GlobalStyle />
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default App
