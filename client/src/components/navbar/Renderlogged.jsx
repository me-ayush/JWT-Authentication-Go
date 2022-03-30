import React from 'react'
import { Link } from "react-router-dom";


export const Renderlogged = () => {
    const isAdmin = JSON.parse(localStorage.getItem('user'))
    var ok = false
    if (isAdmin === 'ADMIN') {
        ok = true
    }
    const check = () => {
        if (ok) {
            return (
                <>
                    <li className="nav-item">
                        <Link className="nav-link" to="/user">My Detail</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/allusers">All Users</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/logout">Logout</Link>
                    </li>
                </>
            )
        } else {
            return (
                <>
                    <li className="nav-item">
                        <Link className="nav-link" to="/user">My Detail</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/logout">Logout</Link>
                    </li>
                </>
            )
        }
    }
    return (
        check()
    )
}
