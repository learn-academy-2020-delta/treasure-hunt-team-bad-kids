import React, { Component } from 'react'

class Square extends Component{
  render(){
    let { index } = this.props
    let { tree } = this.props
    let { question} = this.props
    return(
      <React.Fragment>
        <div className= "square" onClick={ () => { <img src = { question }/> }}>
          <img src = { tree } />
        </div>
      </React.Fragment>
    )
  }
}
export default Square
