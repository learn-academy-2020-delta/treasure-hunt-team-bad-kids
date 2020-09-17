import React, { Component } from 'react'

export default class Counter extends Component {
    render() {
        let { count } = this.props
        return(
            <>
            <p className="counter">Counter: { count }</p>
            </>
        )
    }
}