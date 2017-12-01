import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import SearchBar from 'components/SearchBar'
import SearchResults from 'components/SearchResults'
import Repository from 'components/Repository'

const PrimaryLayout = () => (
  <div>
    <SearchBar/>
    <Switch>
      <Route path="/:owner/:name" component={Repository}/>
      <Route path="/:query" component={SearchResults}/>
      <Redirect to="/"/>
    </Switch>
  </div>
)

const App = () => (
  <BrowserRouter>
    <PrimaryLayout/>
  </BrowserRouter>
)

export default App
