import React from 'react'
import Axios from 'axios'
import { useEffect, useState } from 'react'
const Sample = () => {
    // let a=10;
    let [product, setProduct] = useState([])


    useEffect(() => {
        Axios.get("http://127.0.0.1:5000/api/products")
            .then((response) => {
                console.log(response)
                setProduct(response.data)
            })
            .catch((err) => { console.log(err)})

    }, [])

    let getData = () => {

    }

    return <>
        <div className="container">
            {/* <pre>{JSON.stringify(a)}</pre> */}
            <pre>{JSON.stringify(product)}</pre>
            <div className="btn" onClick={getData}>
                click
            </div>
            {
                product.map((singleProduct) => {
                    return <div className="card">
                        <div className="card-header">
                            <h1>Name: {singleProduct.name}</h1>
                        </div>
                        <div className="card-body">
                            <h2>Price: {singleProduct.price}</h2>
                            <h2>Qty: {singleProduct.qty}</h2>
                        </div>
                    </div>
                })
            }

        </div>
    </>
}

export default Sample