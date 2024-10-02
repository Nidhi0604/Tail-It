export default (state,action)=>{
  switch(action.type)  {//(we have type like add transaction, delete and default.when default then)
    case 'DELETE_TRANSACTION':
    return{
       ...state,
       transactions:state.transactions.filter(transaction =>transaction.id
        !==action.payload)
    }
    case 'ADD_TRANSACTION':
      return{
        ...state,
       transactions:[action.payload,...state.transactions]
      }
    default:
        return state;
  }
}
//(how we specify the application's state changes in response to certain actions 
//to our context)