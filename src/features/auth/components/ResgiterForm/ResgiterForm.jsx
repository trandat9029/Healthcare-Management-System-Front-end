import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import InputField from '../../../../components/forms/InputField';
import PasswordField from '../../../../components/forms/PasswordField';
import ButtonDialog from '../../../../components/common/button/ButtonDialog';
import DateField from '../../../../components/forms/DateField';
import GenderField from '../../../../components/forms/GenderField';

export default function ResgiterForm({onSubmit}) {

    const handleSubmit = (data) =>{
        if(onSubmit){
            onSubmit(data)
        }
    }

    const schema = yup.object().shape({
        firstName: yup.string().required('Please enter your first name.'),
        lastName: yup.string().required('Please enter your last name.'),
        email: yup.string().required('Please enter your email.').email('Please enter a valid email address.'),
        password: yup.string().required('Please enter your password.').min(8, 'Please enter at least 8 characters.'),
        retypePassword: yup.string().required('Please retype your password.').oneOf([yup.ref('password')], 'Password does not match'),
        address: yup.string().required('Please enter your address.'),
        phoneNumber: yup.string().required('Please enter your phoneNumber.'),
        birthday: yup.string().required('Please enter your birthday'),
        gender: yup.string().required('Please select your gender'),
    })

    const form = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            retypePassword: '',
            address: '',
            phoneNumber: '',
            birthday: new Date(),
            gender: 'Male',
        },
        resolver: yupResolver(schema),
        mode: 'all'
    });

    return (
        <>
            <div className='flex flex-col items-center pb-4'>
                <div className='flex justify-center items-center w-11 h-11 p-5 rounded-full bg-[#9c27b0] text-white'>
                    <FontAwesomeIcon icon={faUser} className='text-xl'/>
                </div>
                <h3 className='text-3xl font-semibold'>Đăng ký</h3>
            </div>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <div className='grid grid-cols-2 gap-y-4 gap-x-2'>
                    <div className='flex flex-col gap-2'>
                        <InputField name='firstName' label='First name' form={form}/>
                        <InputField name='email' label='Email' form={form}/>
                        <PasswordField name='password' label='Password' form={form}/>
                        <DateField name='birthday' label='Date of birth' form={form}/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <InputField name='lastName' label='Last name' form={form}/>
                        <InputField name='phoneNumber' label='Phone Number' form={form}/>
                        <PasswordField name='retypePassword' label='Retype Password' form={form}/>
                        <GenderField name='gender' label='Gender' form={form} />
                    </div>
                </div>
                <div>
                    <InputField name='address' label='Address' form={form} />
                </div>

                <div className='pt-8 flex  justify-center'>
                    <button 
                        type='submit'    
                        className='px-5 py-2.5 w-full rounded-xl text-lg  font-semibold cursor-pointer bg-[#34929E] text-white'
                    >
                        Đăng ký
                    </button>
                </div>
            </form>
        </>
    )
}
