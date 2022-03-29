import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

const RenderLogged = () => {
  const isAdmin = JSON.parse(localStorage.getItem('user'))
  var ok = false
  if(isAdmin === 'ADMIN'){
    ok = true
  }
  const check=()=>{
    if(ok){
      return(
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
    }else{
      return(
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
const RenderLogout = () => {
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link" to="/login">Login</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/signup">Sign Up</Link>
      </li>
    </>
  )
}

export const Navbar = () => {
  const [isloigged, setIsloigged] = useState(false)
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'))
    if (token) {
      setIsloigged(true)
    }
  }, [])

  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">JWT</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              {isloigged ?
                <RenderLogged /> :
                <RenderLogout />
              }
            </ul>
          </div>
        </div>
      </nav>


    </>
  )
}
