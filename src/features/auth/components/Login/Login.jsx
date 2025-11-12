import React from 'react'
import LoginForm from '../LoginForm/LoginForm'

export default function Login({closeDialog}) {
    const handleSubmit = (values) =>{
        console.log('check values: ', values)
        if (closeDialog) {
            closeDialog();
        }
    }

    return (
        <>
            <LoginForm onSubmit={handleSubmit}/>
        </>
    )
}
