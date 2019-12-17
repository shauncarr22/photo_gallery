import React from 'react';


function Top(props){
    return(
        <div>
            <p className='nav'>Space Stuff >  Discount Lot </p>
            {props.products.map((products, index) => 
            <div key={index} className='top'>
                <p>Item # {products.item} | </p>
                <p>Model # {products.model}</p>
            </div>    
            )}
        </div>
    )
}

export default Top;