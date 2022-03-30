import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Users = () => {
  let navigate = useNavigate()
  const [data, setdata] = useState(false)
  const [input, setinput] = useState(false)
  const [title, setTitle] = useState("My Details")

  // const [input, setinput] = useState({
  //   first: "",
  //   last: "",
  //   email: "",
  //   phone: "",
  //   pass: "",
  //   type: ""
  // })


  function firstNameChangeHandler(event) {
    setinput(prevState => {
      return { ...prevState, first: event.target.value }
    })
  }
  function lastNameChangeHandler(event) {
    setinput(prevState => {
      return { ...prevState, last: event.target.value }
    })
  }
  function passNameChangeHandler(event) {
    setinput(prevState => {
      return { ...prevState, pass: event.target.value }
    })
  }
  function userTypeHandler(event) {
    setinput(prevState => {
      return { ...prevState, type: event.target.value }
    })
  }

  function checkinput() {
    console.log(data)
    setinput({
      first: data.first_name,
      last: data.last_name,
      email: data.email,
      phone: data.phone,
      type: data.user_type,
      created_at:data.created_at,
      update_at:data.update_at,
    })
  }

  const { user_id } = useParams();
  const clicked = async () => {
    // console.log(user_id)
    const token = JSON.parse(localStorage.getItem('token'))
    var id = JSON.parse(localStorage.getItem('id'))
    if (user_id != undefined) {
      id = user_id
      setTitle("User Details")

    }
    // console.log(id)
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
        })

        const data = await res.json();
        console.log(data)
        if (res.status === 400 || res.status === 500 || !data) {
          window.alert(data.error)
          navigate("/login")
        } else {
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
    checkinput()
    // console.log(input)
  }, [])

  const update = (e) => {
    e.preventDefault();
    if (input.first == undefined) {
      checkinput()
    }
    console.log(input)
  }

  return (
    // <div className='container-fluid'>
    //   <h2 className='text-center'>My Details</h2>
    //   <table className="table  table-striped table-hover">
    //     <thead>
    //       <tr>
    //         <th scope="col">First Name</th>
    //         <th scope="col">Last Name</th>
    //         <th scope="col">Email</th>
    //         <th scope="col">Phone</th>
    //         <th scope="col">User Type</th>
    //         <th scope="col">Action</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       <tr>
    //         <td><input type="text" defaultValue={data.first_name} onChange={firstNameChangeHandler} /></td>
    //         <td><input type="text" defaultValue={data.last_name} onChange={lastNameChangeHandler} /></td>
    //         <td>{data.email}</td>
    //         <td>{data.phone}</td>
    //         {/* <td><input type="text" defaultValue={data.email} onChange={emailNameChangeHandler}/></td>
    //         <td><input type="text" defaultValue={data.phone} onChange={phoneNameChangeHandler}/></td> */}
    //         <td>
    //           <select className="form-select" onChange={userTypeHandler}>
    //             <option selected disabled>Select User Type</option>
    //             <option value="ADMIN">Admin</option>
    //             <option value="USER">User</option>
    //           </select>
    //         </td>
    //         <td>
    //           <button className='btn btn-info m-1' onClick={update}>Update</button>
    //           <button className='btn btn-danger m-1'>Delete</button>
    //         </td>
    //       </tr>
    //     </tbody>
    //   </table>
    // </div>
    <div className='container'>
      <h2 className='text-center'>{title}</h2>
      <table className="table text-cenetr table-striped table-hover">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody className='text-center'>
          <tr>
            <td>ID</td>
            <td>{data.user_id}</td>
            </tr>
          <tr>
            <td>First Name</td>
            <td>{data.first_name}</td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td>{data.last_name}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{data.email}</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>{data.phone}</td>
          </tr>
          <tr>
            <td>User Type</td>
            <td>{data.user_type}</td>
          </tr>
          <tr>
            <td>Account Created</td>
            <td>{data.created_at}</td>
          </tr>
          <tr>
            <td>Account Updated</td>
            <td>{data.updated_at}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
