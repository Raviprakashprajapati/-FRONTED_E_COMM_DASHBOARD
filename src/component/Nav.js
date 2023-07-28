import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import "../css/Nav.css"


function Nav() {

  const auth = localStorage.getItem("user");
  const navigate = useNavigate()
  const logout = () => {
    // console.log("logout")
    localStorage.clear()
    navigate("/signup")
  }

  const [width, setWidth] = useState(window.innerWidth)
  // console.log("width", width)
  

     // useEffect hook to update the window width when it changes
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  return (
    <div  >

      {
        width > 700 ?
          (auth ?
            <ul type="none" className='bg-warning p-2 d-flex justify-content-evenly ' >
              <li ><Link to="/" style={{ textDecoration: "none",backgroundColor:"white",padding:"2.5px 1rem" }} ><b className='text-dark'>Product</b></Link></li>

              <li><Link to="/add" style={{ textDecoration: "none",backgroundColor:"white",padding:"2.5px 1rem"  }} >
                <b className='text-dark '> ➕ Add </b></Link></li>

              <li><Link to="/update" style={{ textDecoration: "none",backgroundColor:"white",padding:"2.5px 1rem"  }} ><b className='text-dark'>Update Product</b></Link></li>

              <li><Link to="/profile" style={{ textDecoration: "none", color: "yellow", backgroundColor: "black", padding: "2px 2rem" }}
              > Profile</Link></li>

              <li><Link onClick={logout} to="/signup" style={{ textDecoration: "none", color: "red", backgroundColor: "black", padding: "2px 2rem" }}  > Logout[{JSON.parse(auth).name}]</Link> </li>




            </ul >
            :
            <ul type="none" className='bg-warning p-2 d-flex  justify-content-end  nav-ul '>
              <li  > <Link to="/signup" style={{ textDecoration: "none", color: "white", backgroundColor: "black", padding: "2px 2rem" }} > Sign Up</Link></li>
              <li><Link to="/login" style={{ textDecoration: "none", color: "white", backgroundColor: "black", padding: "2px 2rem" }} > login</Link></li>
            </ul>)
          :


          (

            auth ?
              <>
                <ul type="none" className='bg-warning p-2 d-flex justify-content-evenly ' >


                  <li><Link to="/profile" style={{ textDecoration: "none", color: "yellow", backgroundColor: "black", padding: "2px 2rem" }}
                  > Profile</Link></li>

                  <li><Link onClick={logout} to="/signup" style={{ textDecoration: "none", color: "red", backgroundColor: "black", padding: "2px 2rem" }}  > Logout[{JSON.parse(auth).name}]</Link> </li>
                </ul >

                <ul style={{marginTop:"-15px"}} type="none" className='bg-warning p-2 d-flex justify-content-evenly '>

                  <li ><Link to="/" style={{ textDecoration: "none",backgroundColor:"white",padding:"2.5px 1rem" }} ><b className='text-dark'>Product</b></Link></li>

                  <li><Link to="/add" style={{ textDecoration: "none",backgroundColor:"white",padding:"2.5px 1rem"  }} ><b className='text-dark'>➕ Add  </b></Link></li>

                  <li><Link to="/update" style={{ textDecoration: "none" ,backgroundColor:"white",padding:"2.5px 1rem" }} ><b className='text-dark'>Update </b></Link></li>
                </ul>
              </>
              :
              <ul type="none" className='bg-warning p-2 d-flex  justify-content-end  nav-ul '>
                <li  > <Link to="/signup" style={{ textDecoration: "none", color: "white", backgroundColor: "black", padding: "2px 2rem" }} > Sign Up</Link></li>
                <li><Link to="/login" style={{ textDecoration: "none", color: "white", backgroundColor: "black", padding: "2px 2rem" }} > login</Link></li>
              </ul>

          )





      }


    </div>
  )
}

export default Nav
