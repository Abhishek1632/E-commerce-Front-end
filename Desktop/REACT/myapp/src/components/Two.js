import { useSelector } from "react-redux";
import  {useSelector, useState}   from 'react'
const Two = () => {
    const [product,setproduct]   =  useState(' ')
//   const state = useSelector((state) => state.products);
const dispatch =  useDispatch()
  console.log(state);
  const handleSubmit  = ()  =>  {
      console.log(product)
      const action ={
          type:"ADD_PRODUCT",
          payload: product
      }

      dispatch(action)

console.log(action)
    
  }
  return (
    <div>
      <h2>
          <input  onChange={(e)   =>  {  setproduct(e.target.value)  }}
           type="text" /> 
           <button onClick={handleSubmit}  >Add</button>

              </div>
  );
  
export default Two;
