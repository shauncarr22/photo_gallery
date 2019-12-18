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
      query: "17264ec6",
      img1: '',
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
    window.addEventListener('query', (e) => {
      this.setState({query: e.detail})
      this.getProducts(this.state.query)
    })
    this.getProducts(this.state.query)
  };
  
  getProducts(query){
    Axios.get(`http://localhost:3008/products/${query}`)
    .then((response) => {
      // console.log(response.data[0].img1);
      this.setState({
        products: response.data,
        img1: response.data[0].img1
      })
})};

  render() {
    return (
      <div className='gallery'>
        <Top products={this.state.products}/>
        <Name products={this.state.products} />
        <Recommendation products={this.state.products}/>
        <Window products={this.state.products} img1={this.state.img1}/>
    </div>
  )}
}

export default App;