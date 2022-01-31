import { Component } from "react";

class Card extends Component {
    constructor(props){
        super(props)
        this.state = {
            orang : this.props.people
        }
    }

    increment = () => {
        // pass by reference
        let newState = {...this.state.orang}
        newState.age += 1
        this.setState({orang:newState})
        console.log(this.props.people.age);
        console.log(this.state.orang.age);
    }

    render() {
        return(
            <div className="card">
                <h1>{this.state.orang.name}</h1>
                {this.state.orang.age}<br/>
                {this.props.people.age}<br/>
                
                <button onClick={this.increment}>+</button>
            </div>
        )
    }
}

export default Card;