import React from 'react'
import ResgiterForm from '../ResgiterForm/ResgiterForm';


export default function Resgiter({closeDialog}) {

    const handleSubmit = (values) =>{
            console.log('check values: ', values)
            if (closeDialog) {
                closeDialog();
            }
        }
    
    return (
         <>
                <ResgiterForm onSubmit={handleSubmit}/>
        </>
    )
}
