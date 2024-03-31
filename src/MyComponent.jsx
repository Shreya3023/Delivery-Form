import React, {useState} from 'react';
function MyComponent(){
    const[name,setName] = useState("");
    const[quantity,setQuantity] = useState(1);
    const[comment,setComment] = useState("");
    const[payment,setPayment] = useState("");
    const[shipping,setShipping] = useState("");
    function handleNameChange(event){
        setName(event.target.value);
    }
    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }
    function handleCommentChange(event){
      setComment(event.target.value);
    }
    function handlePaymentChange(event){
        setPayment(event.target.value);
    }
    function handleShippingChange(event){
        setShipping(event.target.value);
    }
return(  <div className= "  max-w-sm mx-auto p-8 justify-center items-center  text-sm font-medium leading-6 text-gray-900">
   <p> Name:{name} </p>
    <input value={name} className="  relative mt-2   text-gray-500 rounded-md shadow-sm  mb-2"
     onChange={handleNameChange}
    placeholder="Enter your name"/>
   
   
    
    <p>Quantity:{quantity}</p>
    <input value={quantity} className="relative mt-2  items-center   text-gray-500 rounded-md shadow-sm mb-4"
     onChange={handleQuantityChange} type="number"/>
   
    <p>Comment:{comment}</p>
    <textarea value ={comment} className="relative mt-2  text-gray-500 items-center rounded-md shadow-sm mb-6" 
    onChange={handleCommentChange}
    placeholder="Enter delivery instructions"/>
   
    
    <p>Payment:{payment}</p>
    <select value= {payment}  
    onChange={handlePaymentChange}   className="h-full items-center rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm mb-6">
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="MasterCard">MasterCard</option>
    </select> <br/>
    <label >
    <p>Shipping:{shipping}</p>
        <input type="radio" value="Pick Up"
        checked={shipping === "Pick Up"} className="relative items-center   text-gray-500 mt-2 rounded-md shadow-sm mb-2"
        onChange={handleShippingChange}/>
        Pick Up
    </label><br/>
    <label>
    <input type="radio" value="Delivery"
        checked={shipping === "Delivery"}className="relative mt-2  text-gray-500  items-center rounded-md shadow-sm mb-2 "
        onChange={handleShippingChange}/>
        Delivery
        </label>
        
</div>);
}
export default MyComponent