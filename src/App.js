import React, { Component } from 'react'
import Square from './components/Square'
import tree from './assets/tree-solid.svg'
import question from './assets/question-solid.svg'
import treasure from './assets/gem-solid.svg'
import Counter from './components/Counter'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squaresArray: [...Array(9).fill(question)],
      question: "question-solid.svg",
      tree: "tree-solid.svg",
      treasure: "gem-solid.svg",
      file: question,
      count: 9,
      treasureLocation: Math.floor(Math.random() * 9)
    }
  }

  handleChange = (index) => {
    let { squaresArray, treasureLocation, count } = this.state
    this.setState({count: count -= 1})
    if(index === treasureLocation) {
      squaresArray[index] = treasure
      this.setState({squaresArray: squaresArray})
      alert('YOU WIN!')
    } else {
      squaresArray[index] = tree
      console.log(squaresArray);
      this.setState({squaresArray: squaresArray})
    }
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
        <Counter 
          count = { this.state.count }
        />
      </React.Fragment>
    )
  }
}
export default App
