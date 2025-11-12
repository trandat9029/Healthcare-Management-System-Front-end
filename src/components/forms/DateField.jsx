import { Controller } from 'react-hook-form';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function DateField({form, name, label, disabled }) {
  
    const {
        control,
        formState: {errors}
    } = form;

    const hasError = errors[name];

    return (
        <div className='flex flex-col ' >
            {label && <label htmlFor={name} className="text-lg font-semibold mb-2">{label}</label>}
            <Controller
                    name={name}
                    
                    control={control}
                    render={({ field }) => (
                        <DatePicker
                            {...field}
                            selected={field.value} 
                            onChange={(date) => field.onChange(date)} 
                            disabled={disabled}
                            dateFormat="dd/MM/yyyy"
                            className={`input ${hasError ? 'border-red-500' : ''} text-md text-black w-[342px] h-[45px] p-2.5 border-[1px] border-[#ccc] rounded-sm `}
                        />
                    )}
                />
            {hasError && <span style={{ color: 'red', fontSize: '14px' }}>{errors[name]?.message}</span>}
        </div>
    )
}
