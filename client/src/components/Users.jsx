import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Users = () => {
  let navigate = useNavigate()
  const [data, setdata] = useState(false)

  const clicked = async () => {
    const token = JSON.parse(localStorage.getItem('token'))
    const id = JSON.parse(localStorage.getItem('id'))
    if (!token || !id) {
      window.alert('First Login...')
      navigate("/login")
    } else {
      try {
        const res = await fetch(`/users/${id}`, {
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
    <div className='container-fluid'>
      <h2 className='text-center'>My Details</h2>
      <table className="table  table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">User Type</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="text" value={data.first_name} /></td>
            <td><input type="text" value={data.last_name} /></td>
            <td><input type="text" value={data.email} /></td>
            <td><input type="text" value={data.phone} /></td>
            <td>
              <select class="form-select">
                <option selected disabled>Select User Type</option>
                <option value="ADMIN">Admin</option>
                <option value="USER">User</option>
              </select>
            </td>
            <td>
              <button className='btn btn-info m-1'>Update</button>
              <button className='btn btn-danger m-1'>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
