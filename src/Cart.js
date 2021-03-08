import React from 'react'
import { connect } from 'react-redux'
import Recipe from './Recipe'
import {removeItem} from './components/actions/cartActions'

class Cart extends React.Component{
    handleRemoval=(id)=>{
            this.props.removeItem(id);
    }
    render(){
              
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                       
                        <li className="collection-item avatar" key={item.id}>
                                    <div className="item-img" style={{height:"200", width:"200"}}> 
                                        <img src={item.img}  className="" alt="destination"/>
                                    </div>
                                
                                    <div className="item-desc">
                                        <span className="title">{item.title}</span>
                                        <p>{item.desc}</p>
                                        <p><b>Price: ${item.price}</b></p> 
                                        <p>
                                            <b>Quantity: {item.quantity}</b> 
                                        </p>
                                        {/* <div className="add-remove">
                                            <Link to="/cart"><i className="material-icons">arrow_drop_up</i></Link>
                                            <Link to="/cart"><i className="material-icons">arrow_drop_down</i></Link>
                                        </div> */}
                                        <button className="btn btn-danger" onClick={()=>{this.handleRemoval(item.id)}}>Remove</button>
                                    </div>
                                    
                               </li>                        
                    )
                })
            ):

             (
                <p>Nothing.</p>
             )
       return(
            <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div>
            <div className="recipe">
                <Recipe/>
            </div>  
            </div>
       )
    }
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        removeItem:(id)=>{dispatch(removeItem(id))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);