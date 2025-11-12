import { useState } from 'react'
import { Controller } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default function PasswordField({ form, name, label, disabled }) {
    const [showPassword, setShowPassword] = useState(false)

    const {
        control,
        formState: { errors },
    } = form;

    const hasError = !!errors[name];
    const toggleShowPassword = () =>{
        setShowPassword((prev) => !prev);
    }

    return (
        <div className='flex flex-col'>
        {label && <label className='text-lg font-semibold mb-2' htmlFor={name}>{label}</label>}
        <div style={{ position: 'relative' }}>
            <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <input
                {...field}
                id={name}
                type={showPassword ? 'text' : 'password'}
                disabled={disabled}
                style={{
                    width: '100%',
                    padding: '10px',
                    border: hasError ? '1px solid red' : '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '16px',
                }}
                />
            )}
            />
            <button
                type="button"
                onClick={toggleShowPassword}
                style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '16px',
                }}
            >
            {showPassword ? 
                <FontAwesomeIcon icon={faEye}/>
            : 
                <FontAwesomeIcon icon={faEyeSlash}/>
            
            }
            </button>
        </div>
            {hasError && (
                <span style={{ color: 'red', fontSize: '116x' }}>
                {errors[name]?.message}
                </span>
            )}
        </div>
    )
}
