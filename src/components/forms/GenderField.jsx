import React from 'react'
import { Controller } from 'react-hook-form';
import Select from 'react-select'
import { customStyles } from '../../assets/styles/customSelect';

export default function GenderField({form, name, label, disabled }) {

    const {
        control,
        formState: {errors}
    } = form;

      const hasError = errors[name];

    const genderOptions = [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'other', label: 'Other' }
    ];
   

    return (
        <div className='flex flex-col' style={{ marginBottom: '1rem' }}>
            {label && <label htmlFor={name} className="text-lg font-semibold mb-2">{label}</label>}
            <Controller
                    name={name}
                    control={control}
                    render={({ field }) => (
                        <Select
                            {...field}
                            value={genderOptions.find(option => option.value === field.value)}         
                            options={genderOptions}
                            selected={field.value} 
                            onChange={(option) => field.onChange(option.value)} 
                            disabled={disabled}
                            className={`input ${hasError ? 'border-red-500' : ''} `}
                            styles={customStyles}
                        />
                    )}
                />
            {hasError && <span style={{ color: 'red', fontSize: '14px' }}>{errors[name]?.message}</span>}
        </div>
    )
}
