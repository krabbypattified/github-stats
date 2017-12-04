import React from 'react'


class Selector extends React.Component {

  constructor({ selection=-1 }) {
    super(...arguments)
    this.state = { selection }
  }

  onSelect(i) {
    let { onSelect } = this.props
    this.setState({ selection:i })
    onSelect && onSelect(i)
  }

  render() {
    let {children, ...props} = this.props
    return (
      <div {...props}>
        {React.Children.map(children, (child, i) => {
          return React.cloneElement(child, {
            'data-selected': i === this.state.selection,
            onClick: _ => this.onSelect(i),
          })
        })}
      </div>
    )
  }

}


export default Selector
