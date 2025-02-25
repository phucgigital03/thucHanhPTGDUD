import React from "react";
import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";


class Mycomponent extends React.Component {
    state = {
        listUser: [
        ]
    }

    handleAddnewUser = (userObject) => {
        this.setState({
            listUser: [{...userObject,id:this.state.listUser.length + 1}, ...this.state.listUser]
        })
    }

    handleDeleteUser = (userID) => {
        let listUserClone = this.state.listUser;
            // let listUserClone=[...this.state.listUser]//có thể viết theo cách này
        listUserClone = listUserClone.filter(item => item.id !== userID)
        this.setState({
            listUser: listUserClone
        })
    }

   render() {
          return (
            <div>
               
              {/* <UserInfor></UserInfor> */}
                <AddUserInfor 
                    handleAddnewUser={this.handleAddnewUser}
                >
                </AddUserInfor>

                <hr />
                <DisplayInfor 
                        listUser={this.state.listUser}
                        handleDeleteUser={this.handleDeleteUser}
                ></DisplayInfor>
            </div>
        );
    }

}


export default Mycomponent