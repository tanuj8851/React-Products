import React, { useState, useEffect } from 'react'

function Product() {

    const [data, setdata] = useState([]);
    console.log(data);

    const urlLink = "https://63c7a5645c0760f69abb1675.mockapi.io/products";

    useEffect(() => {
        fetchData();

        async function fetchData() {
            console.log("hello")
            try {
                const response = await fetch(urlLink);
                const data = await response.json();

                if (data) {
                    console.log(data)
                    setdata(data)
                }
            } catch (error) {
                console.log(error)
            }

        }


    }, [])



    return (
        <div className='container'>
            {
                data.map((e, i) => {
                  return ( <div className='card'>
                        <h2>{e.name}</h2>
                        <img src={e.image} alt="icon" />
                        <p>$ {e.price}</p>
                        <p> {e.rating}</p>
                        <button>Add to Cart</button>
                    </div>
                  )
                })
            }
        </div>
    )
}

export default Product