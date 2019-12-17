import React from 'react'

function Recommendation (props){
    let starArray = [];
    let input = props.products[0].average.split('.')
        input[0] = Number(input[0])
        input[1] = Number(input[1])
        while (input[0] > 0){
            starArray.push('https://i.imgur.com/mPOC8QL.png')
            input[0]--;
        } 
        if (input[1] > 0){
            starArray.push('https://i.imgur.com/gJui2a2.png')
        }
        while (starArray.length < 5){
            starArray.push('http://i.imgur.com/LX6bVm1.png')
        }

    return(
        <div className="triple_main">

                <div className='triple'>
                    <div className='stacks'>
                        <p className='clickable'>{props.products[0].ratings} Ratings</p>
                        <div className='stars'>
                        {starArray.map((stars, index) => <img className='star' key={index} src={stars}/>)}
                        </div>
                        <p>{props.products[0].average} Average</p>
                    </div>
                        <hr className='lines'/>
                    <div className='stacks'>
                        <p className='percentage'>{props.products[0].recommended}%</p><p>Recommend this product</p>
                    </div>
                        <hr className='lines'/>
                    <div className='stacks'>
                        <img src='https://i.imgur.com/BbSz84X.png'/><p>Community Q&A</p><p className='clickable'>View Now</p>
                    </div>
                </div>    

        </div>
    )
}


export default Recommendation