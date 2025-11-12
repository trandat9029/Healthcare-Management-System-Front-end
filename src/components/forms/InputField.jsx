
import { Controller } from 'react-hook-form';



export default function InputField({form, name, label, disabled }) {

    const  {
        control,
        formState: { errors} 
    } = form;

    const hasError = errors[name];

    return (
         <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <>
                    {label && <label className='text-lg font-semibold' htmlFor={name}>{label}</label>}
                    <input
                        {...field}
                        id={name}
                        name={name}
                        className=''
                        type="text"  
                        disabled={disabled}
                        style={{
                            width: '100%',
                            padding: '10px',
                            border: hasError ? '1px solid red' : '1px solid #ccc',
                            borderRadius: '4px',
                            fontSize: '16px',
                        }}
                     />
                    {hasError && <span style={{ color: 'red' }}>{errors[name]?.message}</span>}
                </>
            )}
        />
    )
}
