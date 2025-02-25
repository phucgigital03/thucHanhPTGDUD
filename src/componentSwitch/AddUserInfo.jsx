

import React, { useState } from 'react'

function AddUserInfo({handleAddnewUser}) {
    const [userInfo,setUserInfo] = useState({
        name: '',
        age: 0
    })

    const handleOnSubmit = (event) => {
        event.preventDefault();//ngăn việc tải lại trang
        console.log(userInfo)
        console.log(handleAddnewUser(userInfo))

    }

    const handleOnchangeInput = (event) => {
        setUserInfo({
            ...userInfo,
            name: event.target.value
        })
    }

    const handleOnchangeInputAge = (event) => {
        const age = parseInt(event.target.value === '' ? 0 : event.target.value);
        console.log(age)
        setUserInfo({
            ...userInfo,
            age: age
        })
    }

    return (
        <form action="#" onSubmit={(event) => handleOnSubmit(event)}>
            <div>
                <label>Name: </label>
                <input type="text" value={userInfo.name} onChange={(event) => handleOnchangeInput(event)} />
            </div>
            <div>
                <label>Age: </label>
                <input type="text" value={userInfo.age} onChange={(event) => handleOnchangeInputAge(event)} />
            </div>
            <button>Submit</button>
        </form>
    )
}

export default AddUserInfo