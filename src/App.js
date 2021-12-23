import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import './App.css';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';

const App = () => {
  const dispatch = useDispatch()
  const cash = useSelector(state=>state.cash.cash)
  const customer = useSelector(state=>state.customer.customer)


const addCash = (cash) => {
  dispatch({type:"ADD_CASH", payload: cash})
}

const getCash = (cash) => {
    dispatch({type:"GET_CASH", payload: cash})
}

const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch(addCustomerAction(customer))
}
const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
}



  return (
    <div>
      <div style={{fontSize:"3rem"}}>{cash}</div>
      <div style={{display:"flex"}}>
        <button className="button" onClick={() => addCash(Number(prompt()))}>Add amount</button>
        <button className="button" onClick={() => getCash(Number(prompt()))}>Get amount</button>
        <button className="buttoncustomer" onClick={() => addCustomer(prompt())}>Add cuctomer</button>
        <button className="buttoncustomer" onClick={() => removeCustomer(prompt())}>Remove customers</button>
      </div>
      {customer.length > 0 ?
      <div>
        {customer.map(customer => 
          <div onClick={()=> removeCustomer(customer)} style={{fontSize:"2rem", border: "1px solid"}}>{customer.name}</div>
          )}
      </div>
       :
       <div style={{fontSize:"2rem", marginTop:20}}>
         There is no customers
       </div>}
    </div>
  )
}

export default App

