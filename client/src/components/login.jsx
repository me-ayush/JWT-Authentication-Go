import React, {useState} from 'react'

export const Login = () => {
  const [email, setEmail] = useState("test@gmail.com")
  const [pass, setPass] = useState("123456789")
  

  const LoginUser = async(e) =>{
    e.preventDefault();
        const res = await fetch('users/login',{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email:email, password:pass
            })
        })
        const data = await res.json();
        console.log(data)
        if(res.status===500 || !data){
            window.alert(data.error);
          }else{
            window.alert('ok');
            localStorage.setItem('user', JSON.stringify(data.first_name))
            localStorage.setItem('id', JSON.stringify(data.user_id))
            localStorage.setItem('token', JSON.stringify(data.token))
            const token =JSON.parse(localStorage.getItem('token'))
            if (!token){
              console.log('no')
            }
        }
  }
  
  return (
    <div className='container mt-5'>
      <form method='POST'>
        <div className="mb-3">
          <label htmlFor="user_email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="user_email" placeholder='Enter Your Email' onChange={(e)=>{setEmail(e.target.value)}} />
          <div className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="user_pass" className="form-label">Password</label>
          <input type="password" className="form-control" id="user_pass" placeholder='Enter Your Password' onChange={(e)=>{setPass(e.target.value)}}/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={LoginUser}>Login</button>
      </form>
    </div>
  )
}
