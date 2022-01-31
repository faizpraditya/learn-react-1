import { Component } from "react";

class GrandChildComponent extends Component{

    message = "Grandchild's message"

    nihGwKasih = () => {
        console.log(this.props);
        this.props.kolbek(this.message)
    }

    render(){
        return(
            <div>
                {/* <h1>{this.props.name}</h1>
                <h2>{this.message}</h2> */}
                <button onClick={this.nihGwKasih}>Click</button>
            </div>
        )
    }
}

export default GrandChildComponent