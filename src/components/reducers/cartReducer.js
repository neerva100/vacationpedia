import { ADD_TO_CART, REMOVE_ITEM } from "../actions/cartActions";

const initState={
    items: [
        {
            id: 101,
            img: "data:image/jpeg;base64,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" ,
            price: 400 ,
            desc: "Take a trip to wonderful Austrailia"
        },
        {
            id: 102,
            img: "data:image/jpeg;base64,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",
            price: 500,
            desc: "Take a trip to Amazing United States"
        },
        {
            id: 103, 
            img: "https://www.pandotrip.com/wp-content/uploads/2018/09/Seigantoji-Pagoda-and-Nachi-Falls-in-Nacho-Japan.jpg",
            price: 600,
            desc: "Take a trip to unbelievable Japan"
        },
        {
            id: 104,
            img: "https://i.pinimg.com/originals/7d/16/82/7d16826b0769e5333dd94eb775bbfe88.jpg",
            price: 700,
            desc: "Explore the Incredible India"
        }
    ],
    addedItems:[],
    total:0
}

const cartReducer=(state=initState, action)=>{
    if(action.type === ADD_TO_CART){
        let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
        let newTotal = state.total + addedItem.price 
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total:newTotal
            }
           
        }
     }
     if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
     
    return state;
}
export default cartReducer;