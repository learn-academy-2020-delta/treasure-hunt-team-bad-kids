import React, { Component } from 'react'

class Square extends Component{
  render(){
    return(
      <React.Fragment>
        <div className= "square" onClick= >
          { this.props.index }
        </div>
      </React.Fragment>
    )
  }
}
export default Square
