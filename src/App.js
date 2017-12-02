import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import {HttpLink} from 'apollo-link-http'
import {InMemoryCache} from 'apollo-cache-inmemory'
import {ApolloClient} from 'apollo-client'
import {ApolloProvider} from 'react-apollo'

import Search from 'components/Search'
import SearchResults from 'components/SearchResults'
import Repository from 'components/Repository'


const httpLink = new HttpLink({uri: 'http://localhost:9000'})
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})


const App = () =>
<ApolloProvider client={client}>
<BrowserRouter>
  <React.Fragment>
    <Switch>
      <Route path="/" exact component={_=><Search fullscreen/>}/>
      <Route path="/:owner/:name" exact component={Repository}/>
      <Route path="/:query" exact component={SearchResults}/>
      <Redirect to="/"/>
    </Switch>
  </React.Fragment>
</BrowserRouter>
</ApolloProvider>


export default App
