import { Component } from "react";

class CounterButtonPlus extends Component{
    // ngasih logic, callbacknya manggil si count supaya ngeset state
    increment = () => {
        // console.log(this.props);
        this.props.callback(this.props.numberCount+1)
    }

    render(){
        return(
            <div>
                {/* <button onClick={() => this.increment()}>+</button> */}
                <button onClick={this.increment}>+</button>
            </div>
        )
    }
}

export default CounterButtonPlus