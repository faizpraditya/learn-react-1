import { Component } from "react";

class FormTrainees extends Component {
    handleSubmitForm = (event) => {
        this.props.handleSubmit(event)
    }

    handleChangeForm = (event) => {
        this.props.handleChange(event)
    }

    render(){
        return(
            <>
                <form onSubmit={this.handleSubmitForm}>
                    <label>
                        <input type="text" className="form-control" onChange={this.handleChangeForm}/>
                        <p>{this.props.errorName}</p>
                    </label>
                    <input type="submit" value="submit" className="btn btn-primary" disabled={this.props.isValid}/>
                </form>
            </>
        )
    }
}

export default FormTrainees