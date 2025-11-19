import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,  } from '@fortawesome/free-solid-svg-icons';
import  {handleGetALlUser} from '../../../services/userService'


export default function ManageUser() {

    const [arrUser, setArrUser] = useState([]);

    useEffect(() =>{
        const fetchUsers = async () =>{
            const response = await handleGetALlUser("ALL");
            if(response && response.errCode === 0){
                setArrUser(response.users)
            }
        }
        fetchUsers();
    }, [])
    console.log('check data: ', arrUser)

    return (
        <div className='h-full'>
            <div className='flex justify-between items-center px-20 py-4'>
                <div className='text-xl'>Sum: </div>
                <div className='flex gap-2.5 items-center'>
                    <div className='bg-search px-4 py-2 rounded-full cursor-pointer'>
                        <input 
                            type="text" 
                            placeholder='Tìm kiếm' 
                            className='outline-0 text-md w-[250px]'
                        />
                        <FontAwesomeIcon icon={faSearch} className='text-md'/>
                    </div>
                    <div>
                        <button 
                            className=' p-2 text-md bg-blue-400 rounded-2xl cursor-pointer font-semibold hover:bg-amber-500'
                        >
                            Thêm người dùng
                        </button>
                    </div>
                </div>
            </div>
            <div className='px-20 py-4 '>
                <div className=' '>
                    <table className="min-w-full border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-4 py-2 border border-gray-300">STT</th>
                                <th className="px-4 py-2 border border-gray-300">Tên</th>
                                <th className="px-4 py-2 border border-gray-300">Email</th>
                                <th className="px-4 py-2 border border-gray-300">Chức vụ</th>
                                <th className="px-4 py-2 border border-gray-300">Hành dộng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {arrUser.map((item, index) =>{
                                return(
                                     <tr key={index} className="hover:bg-gray-50">
                                        <td className="px-4 py-2 border border-gray-300">{index}</td>
                                        <td className="px-4 py-2 border border-gray-300">{item.firstName} {item.lastName}</td>
                                        <td className="px-4 py-2 border border-gray-300">{item.email}</td>
                                        <td className="px-4 py-2 border border-gray-300">{item.roleData.valueVi}</td>
                                        <td className=" px-4 py-2 text-md font-semibold border border-gray-300 text-center">
                                            <button className='p-2 mr-4 w-20 bg-blue-300 rounded-xl cursor-pointer hover:bg-amber-500'>Sửa </button>
                                            <button className='p-2 w-20 bg-blue-300 rounded-xl cursor-pointer hover:bg-amber-500'>Xóa</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
