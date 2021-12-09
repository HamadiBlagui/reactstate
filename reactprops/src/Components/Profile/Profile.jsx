import React from 'react'

function Profile(props) {
    
    return (
        <div>
            {props.children}
         <h1>{props.FullName}</h1> 
         <h2>{props.Bio}</h2>
         <h2>{props.Profession}</h2>  
         
        </div>
    )
}

export default Profile
