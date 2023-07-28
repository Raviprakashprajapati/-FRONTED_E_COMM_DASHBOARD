import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate, useParams} from "react-router-dom"


function UpdateProduct() {

    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [company, setCompany] = useState("")
    const params = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        
        getProductDetail()
    },[])

    const getProductDetail=async ()=>{

        console.log(params)
        let result = await fetch(`${process.env.REACT_APP_BACKEND_URL}/product/${params.id}`,{
            headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
              }
        })

        let finalResult = await result.json()
        setName(finalResult.name)
        setPrice(finalResult.price)
        setCategory(finalResult.category)
        setCompany(finalResult.company)

    }


    const updateProduct = async(e)=>{
        e.preventDefault()
        console.log(name,category)
        let result = await fetch(`${process.env.REACT_APP_BACKEND_URL}/product/${params.id}`,{
            method:"PUT",
            body:JSON.stringify({name,price,category,company}),
            headers:{
                "Content-Type":"application/json",
                authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
            }
        })

        let finalResult = await result.json()
        console.log(finalResult)
        setName("")
        setPrice("")
        setCategory("")
        setCompany("")
        alert("Product is Updated")
        navigate("/")

       
    }

    return (
        <div >
            <h1 className='text-center'>Update Product</h1>

            <div className="container-fluid bg-dark text-white p-2 ">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <Form>

                            <Form.Group className="mb-3" controlId="formBasicname">
                                <Form.Label> <b>Name of Product :</b> </Form.Label>
                                <Form.Control type="text" placeholder="Enter product name"

                                    value={name}
                                    onChange={(e) => setName(e.target.value)}

                                />
                            </Form.Group>


                            <Form.Group className="mb-3" controlId="formBasicprice">
                                <Form.Label>  <b>Product Price :</b> </Form.Label>
                                <Form.Control type="text" placeholder="Enter product price"


                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}

                                />
                            </Form.Group>
                            
                         


                            <Form.Group className="mb-3" controlId="formBasiccategory">
                                <Form.Label> <b>Product Category :</b> </Form.Label>
                                <Form.Control type="text" placeholder="Enter product category"


                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}

                                />
                            </Form.Group>

                            
                         
                         
                            <Form.Group className="mb-3" controlId="formBasiccompany">
                                <Form.Label> <b>Product Company :</b> </Form.Label>
                                <Form.Control type="text" placeholder="Enter product company"


                                    value={company}
                                    onChange={(e) => setCompany(e.target.value)}

                                />
                            </Form.Group>



                            <Button variant="primary" type="submit"
                            onClick={updateProduct}
                            >
                                Update PRODUCT
                            </Button>
                        </Form>
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>

        </div>
    )
}

export default UpdateProduct;
