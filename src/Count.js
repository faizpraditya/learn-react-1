import { Component } from "react"

class Count extends Component {
  constructor(props){
    // me refer ke parent (Component, krn extends component)
    super(props)
    this.state = {
      number : 1
    }
  }

  // arrow funciton, ga perlu this (ga punya context this)
  //   increment = () => {
  increment(){
    // console.log('increment', this);
    // set state berguna untuk melakukan manipulasi state
    // set state maka akan terjadi re-render component
    this.setState({
      number : this.state.number+1
    })
  }
  decrement(){
    if (this.state.number > 0) {
      this.setState({
        number : this.state.number-1
      })
    }
  }

  render() {
    return(
      <div>
        <h1>{this.state.number}</h1>
        {/* ngebind thisnya si increment, kalau mau nggak ngebinding, ubah si increment jadi arrow function karena si increment ga punya context this, jadi ga perlu di bind */}
        {/* <button onClick={this.increment.bind(this)}>+</button> */}

        {/* mengeksekusi increment saat ini juga, begitu di render langsung dieksekusi */}
        {/* <button onClick={this.increment()}>+</button> */}

        {/* decrement */}
        <button onClick={() => this.decrement()}>-</button>

        {/* mengeksekusi arrow function yang memanggil si function increment */}
        <button onClick={() => this.increment()}>+</button>
        {/* berarti onclick itu callback */}
      </div>
    )
  }
}

// state => component ini

export default Count;

// Penjelasan lanjutan
// function a(params) {
//     params()
// }
// function b() {
//     console.log("b");
// }
// a(b)