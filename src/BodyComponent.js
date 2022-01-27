import { Component } from 'react';
import BodyComponentChild from './BodyComponentChild'

class BodyComponent extends Component {
    render(){
      return(
        <BodyComponentChild nameFromParent2 = {this.props.nameFromParent} address2 = {this.props.address} />
      )
    }
  }

export default BodyComponent