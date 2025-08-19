export const initialStore=()=>{
  return{
    Contacts :[],
    
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    
    case 'add_contact':
      return {
        ...store,
        Contacts: action.payload
      
      }
    
    default:
      throw Error('Unknown action.');
  }    
}
