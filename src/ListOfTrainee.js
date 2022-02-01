import { Component } from "react";

class ListOfTrainee extends Component {

    // Kalau perlu props pakai ini
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         trainees : []
    //     }
    // }

    // Kalau ga perlu props bisa pakai ini
    state = {
        trainees : ["Mason", "Mount", "Phil", "Foden"],
        // trainees : []
        newName : '',
        isValid : true,
        errorName : ''
    }

    handleChange = (event) => {
        if(event.target.value.match(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/ )) {
            console.log(event);
            this.setState({
                newName : event.target.value,
                isValid : false,
                errorName : ""
            })
        }else {
            this.setState({
                isValid : true,
                errorName : "email is invalid"
            })
        }
        // if (event.target.value.length >=5) {
        //     console.log(event);
        //     this.setState({
        //         newName : event.target.value,
        //         isValid : false,
        //         errorName : ""
        //     })
        // } else {
        //     this.setState({
        //         isValid : true,
        //         errorName : "input min length is 5 character"
        //     })
        // }
    }

    handleSubmit = (event) => {
        if (this.state.newName !== ""){
            // this.state.trainees.push(this.state.newName)
            // this.setState(this.state)
            this.setState({
                trainees : [...this.state.trainees, this.state.newName]
            })
        }
        // mencegah terjadinya aksi event bawaannya dom
        // contoh untuk tidak merefresh button submit
        event.preventDefault()
    }

    render() {
        // untuk memunculkan trainee bisa pakai looping.
        // cara mudah agar tidak perlu looping pakai map
        // Each child in a list should have a unique "key" prop.
        // maka dari itu harus diberi index agar punya unique key
        // berlaku tiap component, misal ada child component punya list dengan value dan key yang sama maka tidak masalah karena beda komponen.

        // no value available

        // let items = this.state.trainees.map((trainee, index) => {
        //     return <li key={index}>{trainee}</li>
        // })
        return(
            this.state.trainees.length > 0 ?
            <div>
                {/* onClick di submti bisa di ganti dengan on submit pada tag form */}
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" className="form-control" onChange={this.handleChange}/>
                        <p>{this.state.errorName}</p>
                        {/* penjabaran mengapa handle change punya event */}
                        {/* sintak panjangnya dari input type diatas */}
                        {/* <input type="text" className="form-control" onChange={(event)=> this.handleChange(event)}/> */}
                    </label>
                    {/* <input type="button" value="submit" className="btn btn-primary" onClick={this.handleSubmit}/> */}
                    {/* <input type="submit" value="submit" className="btn btn-primary" onClick={this.handleSubmit}/> */}
                    {/* mau input atau button, asalkan typenya =submit bisa pakai onSubmit */}
                    <input type="submit" value="submit" className="btn btn-primary" disabled={this.state.isValid}/>
                </form>
                <ul>
                    {/* {items} */}
                    {this.state.trainees.map((trainee, index) => {
                        return (<li key={index} className="list-group-item list-group-item-action">{trainee}</li>)
                    })}
                </ul>
            </div> :
            <>
                <h1 className="display-5">no value available</h1>
            </>
        )
    }
}

export default ListOfTrainee


        // misal kita buat variable baru di dalam render harus hati2, karena si render bakal dipanggil berkali2. jadi disarankan dimasukkan langsung aja di return


// tugas
// tambahkan ada name, age, address (statenya)
// form sama list dipisah, ga jadi satu (dibuat component)