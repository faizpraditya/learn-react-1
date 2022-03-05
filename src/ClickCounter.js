import { Component } from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component {
    render(){
        const {count, increment} = this.props
        return(
            <>
                {count}<br/>
                <button onClick={increment}>Clicked</button>
            </>
        )
    }
}

export default withCounter(ClickCounter)