import React from 'react'
import shuffler from '../helpers/shuffler'
// import Golfer from './Golfer'

class GolferContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0,
            players: []
        }
    }

    // componentDidMount() {
    //     fetch('https://www.augusta.com/masters/players', {mode: 'no-cors'})
    //     .then(r=>r.text())
    //     .then(data=>{
    //         const doc = (new DOMParser()).parseFromString(data, 'text/html')
    //         for (const player of Array.from(doc.querySelectorAll("div[class='col-md-6']"))) {
    //             const name = player.innerText
    //             const link = player.querySelector('a').getAttribute('href').replace(/http/, 'https')
    //             const info = {name, link}
    //             this.setState(prevState => {
    //                 return {
    //                     players: [...prevState.players, info]
    //                 }
    //             })
    //         }
    //     })
    // }

    componentDidMount() {
        fetch('http://localhost:3001/golfers')
        .then(r=>r.json())
        .then(golfers => {
            this.setState({
                players: shuffler(golfers)
            })
            console.log(this.state)
        })
    }

    handleNext = () => {
        this.setState(prevState => {
            if (prevState.index < this.props.id - 1) {
                return {index: prevState.index + 1}
            }
        })
    }

    handlePrevious = () => {
        this.setState(prevState => {
            if (prevState.index > 0) {
                return {index: prevState.index - 1}
            }
        })
    }

    handleChange = e => {
        e.target.value = e.target.value.replace(/[^0-9]/g, '')
        console.log(e.target.value)
    }

    handleSubmit = e => {
        e.preventDefault()
        const id = this.state.players.index
        const ob = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                bid: parseInt(e.target.value),
                isBought: true
            })
        }
        fetch(`https://localhost:3001/golfers/${id}`, ob)
    }
    
    render() {
        return (
            <div>
                <h1>Welcome to The Masters!</h1>
                <h2>Player #{this.state.players[this.state.index]}</h2>
                <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                    <label>
                        Final Bid:
                        <input type='text' id='price'/>
                    </label>
                    <input type='submit' value='Submit Bid' />
                </form>
                <button onClick={this.handlePrevious}>Previous</button>
                <button onClick={this.handleNext}>Next</button>
            </div>
        )
    }
}

export default GolferContainer