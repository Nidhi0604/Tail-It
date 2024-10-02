import React,{createContext,useReducer} from 'react';
import AppReducer from './AppReducer';
//Intial State
const initialState={
   transactions:[
  //empty array
   ]
}
//Create Context
export const GlobalContext=createContext(initialState);
//Provider component(wrap all react components)(provider provides state ,function
// around the components they are wrapped around)
export const GlobalProvider=({children})=>{
 const[state,dispatch]=useReducer(AppReducer,initialState);
 //Actions
 function deleteTransaction(id){
   dispatch({
      type:"DELETE_TRANSACTION",
      payload:id
   });
 }
 //Actions
 function addTransaction(transaction){
   dispatch({
      type:"ADD_TRANSACTION",
      payload:transaction
   });
 }
 return(
    <GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteTransaction,
        addTransaction
    }}>
     {children}
    </GlobalContext.Provider>
 )
}