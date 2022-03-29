import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const navigation = useNavigate()

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('token'))
        if(!token){
            navigation('/login')
        }else{
            localStorage.clear()
            window.alert('User Logout Successfull')
            navigation('/')
        }
    }, [])
    
  return (
    <div>Logout</div>
  )
}

export default Logout