export const ADD_TO_CART='ADD_TO_CART'
export const REMOVE_ITEM='REMOVE_ITEM'
export const addItems=(id)=>{
    return{
     type: ADD_TO_CART,
    id
    }
}
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
            id
    }
}