import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    useEffect(()=>{
        const auth = localStorage.getItem("user")
        if (auth) {
            navigate("/")
        }
    })

   const  handleLogin = async(e)=>{
    console.log(process.env.REACT_APP_BACKEND_URL)

        e.preventDefault()
        // console.log(email,password)
        let userData = await fetch(`${process.env.REACT_APP_BACKEND_URL}/login`, {
        // let userData = await fetch(`https://backendecommercedashboard.onrender.com/login`, {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type": "application/json"
            },
        })

        let result = await userData.json()
        console.log(result)

        // matching auth
        if (result.auth) {
            localStorage.setItem("user",JSON.stringify(result.userData))
            localStorage.setItem("token",JSON.stringify(result.auth))
            navigate("/")
            
        }else{
            alert("Please enter correct details for login")
        }

    }

    return (

        <div className="container ">
            <div className="row d-flex justify-content-center">
               
                <div className="col-10">
                    <h1 className='text-center'>LOGIN  </h1>
                </div>

                <div className="col-10">
                    <form className='login' >
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email" required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}


                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password" placeholder="Enter your password" required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}


                            />
                        </div>
                        <div className="form-group">
                            <input className='bg-warning' type="submit" value="Submit"
                           onClick={handleLogin}
                           />
                        </div>
                    </form>

                </div>
            </div>
        </div>

    )
}

export default Login
