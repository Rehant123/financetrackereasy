import React from 'react'
import {addDoc,collection,serverTimestamp} from "firebase/firestore"
import { db } from '../Config/firebase'
import { useGetuserdata } from './useGetuserdata'
export const useAddtransactions = () => {


    //get user id
    const {userID} = useGetuserdata();
    const transactionCollectionref = collection(db,"transactions")
    const addtransaction = async( {  tname,tamount})=>{
    await addDoc(transactionCollectionref,{
    userID,
    tname,tamount,createdAt:serverTimestamp()

})
    }
    return {addtransaction};

}
