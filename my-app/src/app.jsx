import React, { Component } from 'react'
import Header from './Components/header'

export class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className='h1 text-danger'>Hello ali</div>
            </div>
        )
    }
}

export default App
