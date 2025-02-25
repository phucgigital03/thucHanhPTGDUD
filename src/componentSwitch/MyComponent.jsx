

import React, { useRef, useState } from 'react'
import AddUserInfo from './AddUserInfo';
import DisplayInfo from './DisplayInfo';

function MyComponent() {
    const [listUserState,setListUserState] = useState({
        listUser: [
        ]
    })
    // const [errList,setErrList] = useState('');
    const errListPtag = useRef(null);


    const handleAddnewUser = (userObject) => {
        console.log(listUserState.listUser.length)
        if(listUserState.listUser.length < 2){
            setListUserState({
                listUser: [{...userObject, id:listUserState.listUser.length + 1 + Math.random()}, ...listUserState.listUser]
            })
            errListPtag.current.textContent = "";
        }else{
            // setErrList("Danh sach da du 10 nguoi")
            errListPtag.current.textContent = "Danh sach da du 2 nguoi";
        }
    }

    const handleDeleteUser = (userID) => {
        let listUserClone = listUserState.listUser;
            // let listUserClone=[...this.state.listUser]//có thể viết theo cách này
        listUserClone = listUserClone.filter(item => item.id !== userID)
        setListUserState({
            listUser: listUserClone
        })
    }

    const handleDeleteAll = ()=>{
        setListUserState({
            listUser: []
        })
    }
  
    return (
        <div>
           
          {/* <UserInfor></UserInfor> */}
            <AddUserInfo 
                handleAddnewUser={handleAddnewUser}
            >
            </AddUserInfo>

            <div className='deleteAllDiv'>
                <button onClick={() => {
                    handleDeleteAll()
                }}>Delete All</button>
            </div>

            <div className='errList' style={{color: 'red'}}>
                <p ref={errListPtag}>
                    {/* {errList} */}
                </p>
            </div>

            <hr />
            <DisplayInfo
                    listUser={listUserState.listUser}
                    handleDeleteUser={handleDeleteUser}
            ></DisplayInfo>
        </div>
    );
}

export default MyComponent