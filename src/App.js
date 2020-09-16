import React, { Component } from 'react'
import Square from './components/Square'
import tree from './assets/tree-solid.svg'
import question from './assets/question-solid.svg'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squaresArray: [...Array(9).fill(question)],
      question: "question-solid.svg",
      tree: "tree-solid.svg",
      file: question
    }
  }

  handleChange = (index) => {
    let { squaresArray } = this.state
    squaresArray[index] = tree
    console.log(squaresArray);
    this.setState({squaresArray: squaresArray})
  }

  render(){
    let { squaresArray } = this.state
    let squares = squaresArray.map((square, index) => {
      return (
        <>
        <Square
          index = { index }
          key = { index }
          handleChange = { this.handleChange }
          square = { square }
        />
        </>
      )
    })
    return(
      <React.Fragment>
        <h1>Treasure Hunt App</h1>
        <div className= "gameBoard">
          { squares }
        </div>
      </React.Fragment>
    )
  }
}
export default App
