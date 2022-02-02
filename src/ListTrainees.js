import { Component } from "react";

class ListTrainees extends Component {
    render(){
        return(
            <>
                <ul>
                    {/* {items} */}
                    {this.props.trainees.map((trainee, index) => {
                        return (<li key={index} className="list-group-item list-group-item-action">{trainee.name}<br/>{trainee.age}<br/>{trainee.address}</li>)
                    })}
                </ul>
            </>
        )
    }
}

export default ListTrainees