import React, { useState } from 'react'
import "./styles/mainpage.css"
import { db } from '../Config/firebase';
import {useGetuserdata} from '../hooks/useGetuserdata';
import { useAddtransactions } from '../hooks/useAddtransactions';
import { useGetTransactions } from '../hooks/useGetTransactions';

export default function MainPage() {

  //USESTATES
  const [tname,settname] = useState("");
  const [tamount,settamount] = useState("")

//HOOKS
const {name,profilePhoto} = useGetuserdata();

const {addtransaction} = useAddtransactions();

const {gettransaction,transaction} = useGetTransactions();

transaction.map((x)=>{

  console.log(x)
})


//functions


  function handleSubmit(e){
    e.preventDefault();
    console.log("lets handle it")
    console.log(tname);
    console.log(tamount)
    addtransaction({tname,tamount})
  }
  return (
    <>
  <div className='.MainPage'>
    <div class="nav"><h1>{name} Transaction's</h1>
  <img src={profilePhoto} alt=""/></div>
  
  <h2>Add a transaction</h2>
<div className = "Transaction_Box">
  <form onSubmit={handleSubmit}>
    
    <label  for = "name">Transaction Name</label>
    <input  required onChange = {(e)=>{settname(e.target.value)}} value = {tname} id = "name" type="text"/>
    <label for="amount">Amount</label>
    <input required onChange = {(e)=>{settamount(e.target.value)}} value = {tamount} id = "number" type="number"/>
    <button className='btn'>Add transaction</button>

  </form>

</div>
  </div>
  <div>
    <h2>All transactions</h2>
    {transaction.map((x)=>{
      const {id,tname,tamount} = x;
      return(
        <div class = "tran">
            <h2>{tamount}</h2>
            <h2>{tname}</h2>
          </div>
      
  
      )
    })}
  </div>
  </>
  )
}
