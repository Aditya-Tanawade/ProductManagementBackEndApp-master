import React, { Component } from 'react'
import ProductService from '../services/ProductService'

 class DeleteProduct extends Component {

    constructor(props) {
   super(props)
   this.state = {
id: this.props.match.params.id,
products :{}

   }

    this.cancel = this.cancel.bind(this);

    }


   componentDidMount(){
     ProductService.getProductsById(this.state.id).then(
        
        response => {this.setState({products: response.data})}
        
        )
        ProductService.deleteProductById(this.state.id);
    
    }

    cancel(){
        
        this.props.history.push('/')
    }

  render() {
    return (
      <div className='container'>
      <h1>Delete Product Page </h1>
      <h3>Below Product is Deleted From DB</h3>
       <div className='card'>
        <div className='card-body'>
         <div className='row'>
        <label>Product Id </label>
        <div >{this.state.products.id}</div>
         </div>

         <div className='row'>
        <label>Product Name </label>
        <div >{this.state.products.name}</div>
         </div>

         <div className='row'>
        <label>Product Price </label>
        <div >{this.state.products.price}</div>
         </div>

         <div className='row'>
        <label>Product Quantity </label>
        <div >{this.state.products.quantity}</div>
         </div>
        
        
        
        </div>
        
        
        </div>
        <button className="btn btn-danger" onClick ={this.cancel}>cancel</button>

      </div>
    )
  }
}

export default DeleteProduct