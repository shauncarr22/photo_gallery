import React from 'react';
import Axios from 'axios';
import Top from './components/top.js'
import Name from './components/name.js'
import Recommendation from './components/recommendation.js'
import Window from './components/window.js'


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      products:[{id: "",
        pname: "",
        img1: "",
        img2: "",
        img3: "",
        img4: "",
        ratings: 0,
        average: "",
        recommended: 0,
        item: 0,
        model: 0,
        did: 0,
      }]
    }
  }
  
  componentDidMount(){
    this.getProducts()
  };
  
  getProducts(){
    Axios.get('http://localhost:3008/products')
    .then((response) => {
      this.setState({products: response.data})
})};

  render() {
    return (
      <div className='gallery'>

      <Top products={this.state.products}/>
      <Name products={this.state.products} />
      <Recommendation products={this.state.products}/>
      <Window />

  
      </div>
  )}
}

export default App;