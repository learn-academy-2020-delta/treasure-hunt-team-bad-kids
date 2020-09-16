import React, { Component } from 'react'
import Square from './components/Square'
import tree from './assets/tree-solid.svg'
import question from './assets/question-solid.svg'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squaresArray: [...Array(9).fill("?")],
      question: "question-solid.svg",
      tree: "tree-solid.svg"
    }
  }


  render(){
    let { squaresArray } = this.state
    let boxes = squaresArray.map((box, index) => {
      return (
        <>
        <Square
          index = { index }
          key = { index }
          tree = { tree }
          question = { question }
        />
        </>
      )
    })
    return(
      <React.Fragment>
        <h1>Treasure Hunt App</h1>
        <div className= "gameBoard">
          { boxes }
        </div>
      </React.Fragment>
    )
  }
}
export default App
