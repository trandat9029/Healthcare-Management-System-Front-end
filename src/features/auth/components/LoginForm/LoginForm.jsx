import React from 'react'
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import InputField from '../../../../components/forms/InputField';
import PasswordField from '../../../../components/forms/PasswordField';
import ButtonDialog from '../../../../components/common/button/ButtonDialog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock  } from '@fortawesome/free-solid-svg-icons';


export default function LoginForm({onSubmit}) {

    const handleSubmit = (values) =>{
        if(onSubmit){
            onSubmit(values);
        }
    }

    const schema = yup.object().shape({
        email: yup.string().required('Please enter your email.').email('Please enter a valid email address.'),
        password: yup.string().required('Please enter your password.').min(8, 'Password must be at least 8 characters long.')    
    });

    const form =useForm({
        defaultValues: {
            email: '',
            password: '',
        },
        resolver: yupResolver(schema),
        mode: 'all'
    });


    return (
        <>
            <div className='flex flex-col items-center pb-4'>
                <div className='flex justify-center items-center w-11 h-11 p-5 rounded-full bg-[#9c27b0] text-white'>
                    <FontAwesomeIcon icon={faLock} className='text-xl'/>
                </div>
                <h3 className='text-3xl font-semibold'>Đăng nhập</h3>
            </div>
            <form onSubmit={form.handleSubmit(handleSubmit)} >
                <InputField name='email' label='Email' form={form}/>
                <PasswordField name='password' label='Password' form={form}/>

                <div className='pt-8 flex  justify-center'>
                    <button 
                        type='submit'    
                        className='px-5 py-2.5 w-full rounded-xl text-lg  font-semibold cursor-pointer bg-[#34929E] text-white'
                    >
                        Đăng nhập
                    </button>
                </div>
            </form>
        </>
    )
}
