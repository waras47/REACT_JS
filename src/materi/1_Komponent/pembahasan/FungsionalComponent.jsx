import { useState } from "react";

const FunctionalComponent = ({nama}) => {
 //untukk menggunakan state di functional component dengan hook

 const [value, setValue] = useState(0);

 const handlePlus = () => {
  setValue(value + 1)
 }
 const handleMinus = () => {
  if (value > 0) {

   setValue(value - 1)
  }
 }
 return(

 <div>
  <h1>ini di buat FunctionalComponet</h1>
  <p>nama saya {nama}</p>
  <button onClick={handleMinus}> - </button>
  <span> {value} </span>
  <button onClick={handlePlus}> + </button>
 </div>
 )
}

FunctionalComponent.defaultProps = {
 nama : 'User'
}

export default FunctionalComponent;