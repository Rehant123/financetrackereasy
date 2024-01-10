import { collection, onSnapshot, orderBy } from 'firebase/firestore';
import React, { useEffect } from 'react'

import { db } from '../Config/firebase';
import { useState } from 'react';
import {query,where} from "firebase/firestore"
import { useGetuserdata } from './useGetuserdata';
export const useGetTransactions = () => {
const {userID} = useGetuserdata();
const collectionref = collection(db,'transactions');
const [transaction,settransaction] = useState([]);


const gettransaction = async()=>{
   let unsubscribe;
   let docs = [];
   try{
    const queryTransaction = query(collectionref,where("userID","==",userID),orderBy("createdAt"));
    unsubscribe  = onSnapshot(queryTransaction,(snapshot)=>{
       snapshot.forEach((x)=>{
        const data = x.data();
        const id = x.id;
        docs.push({...data,id:id});

       });
       settransaction(docs);    

    })

   }catch(error){
    console.error(error);

   }
   return ()=>unsubscribe();

}
useEffect(()=>{
    gettransaction();
},[])

return {transaction}
}