import { Component } from "react";
import Card from "./Card";
import './Trainee.css';

class Trainees extends Component {
    constructor(props){
        super(props)
        this.state = {
            peoples : [
                {
                    name : "Mason",
                    age : 20
                },{
                    name : "Mount",
                    age : 22
                }
            ]
        }
    }

    addComponent = () => {
        // let addPeople = this.state.peoples
        // let newPeople = {
        //     name : "tes",
        //     age : 21
        // }
        // addPeople.push(newPeople)
        // this.setState({
            //     people :addPeople
            // })
        this.state.peoples.push({
            name : "tes",
            age : 21
        })
        // untuk rerender
        // this.setState({})
        this.setState(this.state)
    }

    render() {
        const items = []
        for (let index = 0; index < this.state.peoples.length; index++) {
            items.push(<Card people = {this.state.peoples[index]}/>)
        }
        return(
            <>
            {items}
                <div className="card">
                    <button onClick={this.addComponent}>Add Component</button>
                </div>
            </>
        )
    }
}

export default Trainees;