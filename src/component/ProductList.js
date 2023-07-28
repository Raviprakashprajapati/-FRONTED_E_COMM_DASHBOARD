import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { RiDeleteBin6Fill } from "react-icons/ri"


function ProductList() {

  const [products, setProducts] = useState([])
  let count = 1;


  useEffect(() => {

    getProducts();
  }, [])


  // list products----
  const getProducts = async () => {
    let result = await fetch(`${process.env.REACT_APP_BACKEND_URL}/products`, {
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
      }
    })
    let finalResult = await result.json()

    setProducts(finalResult)
    console.log(products)

  }


  //  delete products
  const deleteProduct = async (id) => {

    let result = fetch(`${process.env.REACT_APP_BACKEND_URL}/product/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
      }
    })
    let finalResult = await result

    if (finalResult) {
      alert("Record deleted")
      getProducts()
    }

  }

  const searchHandle = async (event) => {

    let key = event.target.value.toLowerCase()
    console.log(key)

    if (key) {

      let result = await fetch(`${process.env.REACT_APP_BACKEND_URL}/search/${key}`, {
        headers: {
          authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
        }
      })
      let finalResult = await result.json()
      if (finalResult) {
        setProducts(finalResult)

      }
    }
    else {
      getProducts()
    }



  }


  return (
    <div className='bg-dark text-white' >
      <h1 className='text-center '>Product List </h1>


      {/* search list for products */}
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-10">
            <form >
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                {/* <Form.Label></Form.Label> */}
                <Form.Control type="text" placeholder="search products with category"

                  onChange={searchHandle}



                />
              </Form.Group>
            </form>
          </div>
        </div>
      </div>







      <div className="container  p-3 " style={{ backgroundColor: "#373b3e" }} >
        <div className="row d-flex justify-content-center align-items-center gap-3  ">


          {
            products.length > 0 ? products.map((i, index) => {

              return (

                JSON.parse(localStorage.getItem("user"))._id == `${i.userId}`
                  ?
                  <div className="col-auto  " key={index}>
                    <Card border="warning" className='bg-warning' style={{ width: '18rem', boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px" }}>
                      <Card.Header style={{ fontWeight: "bold" }} >Product {count++}</Card.Header>
                      <Card.Body>
                        <Card.Title style={{ fontFamily: "fantasy" }} > {i.name}</Card.Title>
                        <Card.Text style={{ fontFamily: "math" }} >
                          Price : {i.price} <br />
                          Category : {i.category} <br />
                          Company : {i.company}

                        </Card.Text>
                      </Card.Body>
                      <Card.Header>
                        <div className='d-flex justify-content-around' >

                          <button className='btn btn-danger' style={{ padding: "0 2rem" }}   ><Link to={`/update/${i._id}`} style={{ textDecoration: "none", color: "white" }} >Update</Link></button>

                          <button className='btn btn-dark' style={{ padding: "0 1rem" }} onClick={() => deleteProduct(i._id)} ><RiDeleteBin6Fill /></button>
                        </div>
                      </Card.Header>
                    </Card>
                  </div>



                  :
                  null




              )
            })
              :

              <h3 className='text-center' >No Products Found 😔😔😔😔 </h3>

          }




        </div>
      </div>









    </div>
  )
}

export default ProductList
