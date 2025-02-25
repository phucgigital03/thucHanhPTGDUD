

import React from 'react'

function DisplayInfo({listUser,handleDeleteUser}) {
  

  return (
    <div>
        {listUser.map((user) => {
        return (
            <div key={user.id} className={user.age < 18 ? "red": "blue"}>
                <div>User name is: {user.name}</div>
                <div>User Age: {user.age}</div>
                <button onClick={() => {
                    handleDeleteUser(user.id)
                }}>Delete</button>
                
                <hr />
            </div>
        )
        })}
    </div>
)
}

export default DisplayInfo