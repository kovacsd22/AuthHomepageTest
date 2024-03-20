import React from 'react'
import LoginUser from '../hooks/post/LoginUser'

function Public()
{
    console.log("hello")
    return (
        <>
            <h1>Hello Public</h1>
            <LoginUser />
        </>

    )
}



export default Public