import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddProduct() {

    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [company, setCompany] = useState("")
    const [error,setError] = useState(false)

    const addProduct = async(e)=>{
        e.preventDefault()
        // console.log(!name)

        // add product validation---
        if (!name || !price || !category || !company) {

            setError(true)
            return false;
            
        }

     

            // add data to Database
        const userId = JSON.parse(localStorage.getItem("user"))._id
        let result = fetch(`${process.env.REACT_APP_BACKEND_URL}/add-product`,{
            method:"POST",
            body:JSON.stringify({name,price,category,company,userId}),
            headers:{
                'Content-Type':"application/json",
                authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
            }
        })

        let finalResult = await result
        console.log(finalResult)

        setName("")
        setPrice("")
        setCategory("")
        setCompany("")
        alert("Product is Added")
     

    }

    return (
        <div >
            <h1 className='text-center'>Add Product</h1>

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

                           { error && !name && <p  className='text-danger' >Enter Valid Name</p> }


                            <Form.Group className="mb-3" controlId="formBasicprice">
                                <Form.Label>  <b>Product Price :</b> </Form.Label>
                                <Form.Control type="text" placeholder="Enter product price"


                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}

                                />
                            </Form.Group>
                            
                           { error && !price && <p  className='text-danger' >Enter Valid price</p> }


                            <Form.Group className="mb-3" controlId="formBasiccategory">
                                <Form.Label> <b>Product Category :</b> </Form.Label>
                                <Form.Control type="text" placeholder="Enter product category"


                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}

                                />
                            </Form.Group>

                            
                         
                              
                           { error && !category && <p  className='text-danger' >Enter Valid category</p> }

                            <Form.Group className="mb-3" controlId="formBasiccompany">
                                <Form.Label> <b>Product Company :</b> </Form.Label>
                                <Form.Control type="text" placeholder="Enter product company"


                                    value={company}
                                    onChange={(e) => setCompany(e.target.value)}

                                />
                            </Form.Group>

                            { error && !company && <p  className='text-danger' >Enter Valid Company</p> }
                         



                            <Button variant="primary" type="submit"
                            onClick={addProduct}
                            >
                                ADD PRODUCT
                            </Button>
                        </Form>
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>

        </div>
    )
}

export default AddProduct
