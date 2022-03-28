import React, { useState } from 'react'

const SignUp = () => {
  // const [first, setfirst] = useState()
  // const [last, setLast] = useState()
  // use
  const [input, setinput] = useState({
    first: "",
    last: "",
    email: "",
    phone: "",
    pass: "",
    type: ""
  })
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
  function emailNameChangeHandler(event) {
    setinput(prevState => {
      return { ...prevState, email: event.target.value }
    })
  }
  function phoneNameChangeHandler(event) {
    setinput(prevState => {
      return { ...prevState, phone: event.target.value }
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


  const signUpUser = async(e) => {
    e.preventDefault();
    const res = await fetch('/users/signup', {
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "first_name": input.first,
        "last_name": input.last,
        "password": input.pass,
        "email": input.email,
        "phone": input.phone,
        "user_type": input.type
      })
    })

    const data = await res.json();
    console.log(data)
    if (res.status === 500 || !data) {
      window.alert(data.error);
    } else {
      window.alert('ok');
    }


  }

  return (
    <div className="container">
      <form method='POST'>
        <div className="row mb-3">
          <label htmlFor="first_name" className="col-sm-2 col-form-label">First Name</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="first_name" onChange={firstNameChangeHandler} />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="last_name" className="col-sm-2 col-form-label">Last Name</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="last_name" onChange={lastNameChangeHandler} />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="user_email" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="user_email" onChange={emailNameChangeHandler} />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="user_phone" className="col-sm-2 col-form-label">Phone</label>
          <div className="col-sm-10">
            <input type="number" className="form-control" id="user_phone" onChange={phoneNameChangeHandler} />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="user_pass" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="user_pass" onChange={passNameChangeHandler} />
          </div>
        </div>
        <fieldset className="row mb-3">
          <legend className="col-form-label col-sm-2 pt-0">User Type</legend>
          <div className="col-sm-10">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="user_type" id="admin" value="ADMIN" onClick={userTypeHandler} />
              <label className="form-check-label" htmlFor="admin">
                Admin
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="user_type" id="user" value="USER" onClick={userTypeHandler} />
              <label className="form-check-label" htmlFor="user">
                User
              </label>
            </div>
          </div>
        </fieldset>
        <button type="submit" className="btn btn-primary" onClick={signUpUser}>Sign in</button>
      </form>
    </div>
  )
}

export default SignUp