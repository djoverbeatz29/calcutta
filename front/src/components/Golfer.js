import React from 'react'

class Golfer extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.playerk
    }
    
    componentDidMount() {
        const { link } = this.state
        fetch(link)
        .then(r => r.text())
        .then(data => {
            const doc = (new DOMParser()).parseFromString(data, 'text/html')
            const img = doc.querySelector('.playerBioPhoto img')
            const bio = doc.querySelector('.playerBioBox')
            this.setState({ img, bio })
        })        
    }

    render() {
        return <div><h1>{this.state.name}</h1></div>
    }

}

export default Golfer