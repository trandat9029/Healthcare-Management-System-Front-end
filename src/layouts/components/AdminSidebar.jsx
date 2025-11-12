import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function AdminSidebar({menu}) {
    return (
        <div className="sidebar">
            <ul>
                {menu.map((item, index) => (
                    <li key={index}>
                        <Link to={item.link}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
