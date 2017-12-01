import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import {HttpLink} from 'apollo-link-http'
import {InMemoryCache} from 'apollo-cache-inmemory'
import {ApolloClient} from 'apollo-client'
import {ApolloProvider} from 'react-apollo'
import {injectGlobal} from 'styled-components'
import {normalize} from 'polished'

import Search from 'components/Search'
import SearchResults from 'components/SearchResults'
import Repository from 'components/Repository'


// Apollo setup
const httpLink = new HttpLink({uri: 'http://localhost:9000'})
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})


// CSS Helpers
injectGlobal`${normalize()}`


const App = () => (
  <ApolloProvider client={client}>
  <BrowserRouter>
    <div>
      <Route path="/" component={Search}/>
      <Switch>
        <Route path="/" exact/>
        <Route path="/:owner/:name" exact component={Repository}/>
        <Route path="/:query" exact component={SearchResults}/>
        <Redirect to="/"/>
      </Switch>
    </div>
  </BrowserRouter>
  </ApolloProvider>
)

export default App
