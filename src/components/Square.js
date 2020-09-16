import React, { Component } from 'react'

class Square extends Component{
  render(){
    let { index, square } = this.props
    return(
      <React.Fragment>
        <div className= "square" onClick= {() => this.props.handleChange(index)}>
          <img src = { square } />
        </div>
      </React.Fragment>
    )
  }
}
export default Square
