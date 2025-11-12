import React from 'react'

export default function ButtonDialog({title}) {

    return (
        <button 
            type='submit'
            className='px-5 py-2.5 w-full rounded-xl text-lg  font-semibold cursor-pointer bg-[#34929E] text-white'
        >
                {title}
        </button>
    )
}
