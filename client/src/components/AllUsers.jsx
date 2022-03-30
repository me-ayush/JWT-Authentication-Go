import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export const User = () => {
  let navigate = useNavigate()
  const [data, setdata] = useState(false)

  const clicked = async () => {
    const token = JSON.parse(localStorage.getItem('token'))
    if (!token) {
      window.alert('First Login...')
      navigate("/login")
    } else {
      try {
        const res = await fetch('/users', {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
            "token": token,
          }
        });
        const data = await res.json();
        if (res.status === 500 || !data) {
          window.alert(data.error)
          navigate("/login")
        } else {
          // window.alert('Ok')
          console.warn(data)
          setdata(data)
        }
      } catch (err) {
        console.warn(err);
      }
    }
  }
  useEffect(() => {
    clicked()
    console.log(data)
  }, [])


  return (
    <div className="container">
      <h2 className='text-center'>User Data</h2>
      <table className="table  table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">User Type</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            data && data.map((d, key) => {
              return (
                <tr key={d.user_id}>
                  <td>{key + 1}</td>
                  <td>{d.first_name}</td>
                  <td>{d.last_name}</td>
                  <td>{d.email}</td>
                  <td>{d.phone}</td>
                  {/* <td>{d.user_id}</td> */}
                  {
                    d.user_type === 'ADMIN' ?
                      <td>Admin</td> :
                      <td>User</td>
                  }
                  <td><Link className='nav-link' to={`/user/${d.user_id}`} target="_blank">View</Link></td>
                </tr>
              )
            }
            )
          }
        </tbody>
      </table>
    </div>
  )
}
