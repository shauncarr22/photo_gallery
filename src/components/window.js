import React from 'react';
import Axios from 'axios';
class Window extends React.Component {
    constructor() {
        super()
        this.state={
            products:[],
            window:''
        }
    }
    componentDidMount(){
        this.getProducts()
    }
    getProducts(){
        Axios.get('http://localhost:3008/products')
        .then((response) => {
            this.setState({products: response.data})
            this.state.products.map((products) => {
                this.setState({window: products.img1})
            })
    })};
    handleClick(src){
        this.setState({window: src})
    };
        render(){
            return(
          <div className="container_main">
            <div className='container'>
                {this.state.products.map((products, index)=>
                    <div className='smalls' key={index}>
                        <ul className='pics'>
                            <li className='pic' onClick={() => this.handleClick(products.img1)}><img src={products.img1} alt=''/></li>
                            <li className='pic' onClick={() => this.handleClick(products.img2)}><img src={products.img2} alt=''/></li>
                            <li className='pic' onClick={() => this.handleClick(products.img3)}><img src={products.img3} alt=''/></li>
                            <li className='pic' onClick={() => this.handleClick(products.img4)}><img src={products.img4} alt=''/></li>
                        </ul>
                    </div>
                )}
                    <div className="big">
                        <img src={this.state.window} alt=''/>
                    </div>
            </div>
          </div>
         )
    }
}
export default Window