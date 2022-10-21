import React from 'react';
import PropTypes from 'prop-types';

class ClassComponent extends React.Component{
 constructor(props){
  super(props)
//state hanya bisa di class component
  this.state= {
   value : 0
  }
  //kalau dengan arrow function tidak perlu di binding

  // this.handlePlus = this.handlePlus.bind(this);
  // this.handleMinus = this.handleMinus.bind(this);
 }
 handlePlus = () =>{
  this.setState({
   value :this.state.value + 1
  });
 }
 handleMinus = ()=>{
 if(this.state.value > 0){

  this.setState({
   value :this.state.value - 1
  });
 }
 }
 render() {

  return(
   <div>
    <h1>komponen ini di buat denga elas komponen</h1>
    <p>nama saya adalah {this.props.nama}</p>
    <button onClick={this.handleMinus}> - </button>
    <span> {''} {this.state.value} {''}</span>
    <button onClick={this.handlePlus}> + </button>
   </div>
  )
 }
}


ClassComponent.propTypes = {

 nama : PropTypes.string.isRequired
}
export default ClassComponent;