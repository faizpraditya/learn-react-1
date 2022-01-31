import { Component } from "react";

class Clock extends Component{
    constructor(props) {
        super(props)
        this.state = {
            date : new Date()
        }
    }

    componentDidMount(){
        console.log("ComponentDidMount Called");
        // boleh melakukan set state
        // function ini akan terpanggil ketika semua komponen sudah terbentuk / ready dan terpanggil setelah render
        this.timerID = setInterval(
            () => this.tick(), 1000
        )
        // setInterval(
        //     () => this.tick(), 1000
        // )

        // asynchronous function: setTimeout, setInterval, dll
        // panggil api
    }

    componentDidUpdate(){
        console.log("CompnentDidUpdate called");
    }



    stop = () => {
        clearInterval(this.timerID)
    }

    componentWillUnmount(){
        console.log("componentWillUnmount called");
        clearInterval(this.timerID)
        // function yang akan dipanggil ketika component di destroy
        // biasanya untuk clean up
    }

    tick() {
        this.setState({
            date : new Date()
        })
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate called");
        return true
    }

    getSnapshotBeforeUpdate() {
        console.log("getSnapshotBeforeUpdate called");
    }

    render() {
        console.log("Render is called");
        return(
            <div>
                <h1> {this.state.date.toLocaleTimeString()} </h1>
                <button onClick={this.stop}>STOP</button>
            </div>
        )
    }
}

export default Clock