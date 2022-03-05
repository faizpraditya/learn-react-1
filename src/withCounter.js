import { Component } from "react";

const withCounter = (WrappedComponent) => {
    class WithCounter extends Component {
        constructor(props){
            super(props)
            this.state = {
                count : 0
            }
        }
    
        increment = () => {
            this.setState({
                count : this.state.count+1
            })
        }

        render(){
            return(
                <WrappedComponent
                    count = {this.state.count}
                    increment = {this.increment}
                />
            )
        }
    }
    return WithCounter
}

export default withCounter