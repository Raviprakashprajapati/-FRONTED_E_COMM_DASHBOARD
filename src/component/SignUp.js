import React, { useEffect, useState } from 'react'

import { useNavigate } from "react-router-dom"
import "../css/SignUp.css"

function SignUp() {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const navigate = useNavigate()

    const collectData = async (e) => {
        e.preventDefault()
        // console.log(name, email, password)
        if(!name || !password || !email ){
            alert("Please Fill the all details for signup")
            return;
        }
        let userData = await fetch(`${process.env.REACT_APP_BACKEND_URL}/register`, {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: {
                "Content-Type": "application/json"
            },
        })

        let result = await userData.json()
        console.log("result", result)

        // store in local storage
        localStorage.setItem("user", JSON.stringify(result.result))
        localStorage.setItem("token", JSON.stringify(result.auth))

        if (result) {
            navigate('/')
        }

    }


    // signup disable if user Auth
    useEffect(()=>{
    
        const auth = localStorage.getItem("user");
        if (auth) {
          navigate("/")
        }
      })




    return (
        <div>
            <h4 className='text-center'>SIGN UP</h4>

          

            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-8">

                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" name="name" placeholder="Enter your name" required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}

                                />
                            </div>
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
                                    onClick={collectData} />
                            </div>
                        </form>

                    </div>
                </div>
            </div>







        </div>
    )
}

export default SignUp
