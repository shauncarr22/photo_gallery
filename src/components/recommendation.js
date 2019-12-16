import React from 'react'

function Recommendation (props){
    let starArray = [];
    let input = props.products[0].average.split('.')
        input[0] = Number(input[0])
        input[1] = Number(input[1])
        while (input[0] > 0){
            starArray.push('./img/stars/star-24px.svg')
            input[0]--;
        } 
        if (input[1] > 0){
            starArray.push('./img/stars/star_half-24px.svg')
        }
        while (starArray.length < 5){
            starArray.push('./img/stars/star_border-24px.svg')
        }

    return(
        <div>

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
                        <img src='./img/q&a.png'/><p>Community Q&A</p><p className='clickable'>View Now</p>
                    </div>
                </div>    

        </div>
    )
}


export default Recommendation