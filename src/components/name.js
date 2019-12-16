import React from 'react'

function Name(props){
    return(
        <div className='name'>
            {props.products.map((products, index) => 
                <h1 key={index}>
                    {products.pname}
                </h1>
            )}
        </div>
    )
}

export default Name;