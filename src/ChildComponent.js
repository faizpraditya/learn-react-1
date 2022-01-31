import { Component } from "react";
import GrandChildComponent from "./GrandChildComponent";

class ChildComponent extends Component{

    // message = "Child's message"

    mintaLagi = (msg) => {
        // console.log(this.props);
        // this.props.callback(this.message)
        this.props.callback(msg)
    }

    render(){
        return(
            <div>
                {/* <h1>{this.props.name}</h1>
                <h2>{this.message}</h2>
                // <button onClick={this.sendPropsCallback}>Click</button> */}
                <GrandChildComponent kolbek={this.mintaLagi} />
            </div>
        )
    }
}

export default ChildComponent