import React from "react";


class AddUserInfor extends React.Component{
    state = {
        Name: '',
        Age: 0,
    }

    handleOnSubmit = (event) => {
        event.preventDefault();//ngăn việc tải lại trang
        console.log(this.state)
        console.log(this.props.handleAddnewUser(this.state))

    }

    handleOnchangeInput = (event) => {
        this.setState({
            ...this.state,
            Name: event.target.value
        })
    }

    handleOnchangeInputAge = (event) => {
        const age = parseInt(event.target.value === '' ? 0 : event.target.value);
        console.log(age)
        this.setState({
            ...this.state,
            Age: age
        })
    }



    render(){
        
        // console.log(handleAddnewUser);

        return (
            <form action="#" onSubmit={(event) => this.handleOnSubmit(event)}>
                <div>
                    <label>Name: </label>
                    <input type="text" value={this.state.Name} onChange={(event) => this.handleOnchangeInput(event)} />
                </div>
                <div>
                    <label>Age: </label>
                    <input type="text" value={this.state.Age} onChange={(event) => this.handleOnchangeInputAge(event)} />
                </div>
                <button>Submit</button>
            </form>
        )

    }
}


export default AddUserInfor
