import { Component } from "react";
import withCounter from "./withCounter";

class HoverCounter extends Component {
    render(){
        const {count, increment} = this.props
        return(
            <>
                {count}<br/>
                <h1 onMouseOver={increment}>Clicked</h1>
            </>
        )
    }
}

export default withCounter(HoverCounter)