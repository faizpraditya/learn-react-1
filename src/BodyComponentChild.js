import { Component } from 'react';

class BodyComponentChild extends Component {
    render(){
      return(
        <div className='card' style={{width: "18rem"}}>
          <div className='card-body'>
            <h5 className='card-title'>{this.props.nameFromParent2}</h5>
            <h5 className='card-title'>{this.props.address2}</h5>
            <p className='card-text'>
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis rem id dolorum minus impedit accusamus voluptas porro beatae debitis ipsa, praesentium fuga vitae, mollitia quod amet quisquam dolor. Commodi, natus.</p>
          </div>
        </div>
      )
    }
  }

export default BodyComponentChild