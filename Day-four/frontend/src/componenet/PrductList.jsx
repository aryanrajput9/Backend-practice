import axios from 'axios';
import React from 'react'

function PrductList() {
    const productData = async () => {

        const res = await axios.get("http://localhost:3000/getProductData");
        console.log(res)
    }
    return (
        <div>
            <button onClick={() => productData()}>clicck</button>

        </div>
    )
}

export default PrductList
