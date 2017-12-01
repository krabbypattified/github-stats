import React from 'react'

import Autofill from './Autofill'


class SearchBar extends React.PureComponent {

  constructor() {
    super(...arguments)
    this.state = {autofill: ''}
  }

  render() {
    return (
      <div>
        <input onChange={e=>this.setState({autofill:e.target.value})}/>
        <Autofill query={this.state.autofill}/>
      </div>
    )
  }

}


export default SearchBar
