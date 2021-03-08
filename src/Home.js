import React from 'react'
import { connect } from 'react-redux'
import {addItems} from './components/actions/cartActions'
class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
            addToCart:false
        }

    }
    handleSubmit=(id)=>{
        this.destiationAdded()
        this.props.addItems(id)
        
        
    }
    destiationAdded=()=>{
        return(
            <div>Added</div>
        )
    }
    render(){
        
        let itemList=this.props.items.map(item =>{
            console.log(item)
            return( 
 <div style={{flex: 1}} key={item.id}>
    <div className="row">
    <div className="col s12 m17">
      <div className="card">
        <div className="card-image">
          <img src={item.img} alt="desti"/>
          {/* <span className="card-title"></span>  */}
        </div>
        <div className="card-content">
            <p>{item.desc}</p>
            <p style={{fontWeight:"bold"}}>{"$"+item.price}</p>
        </div>
        <div className="card-action" id="addedToCart">
          <button className="waves-effect waves-light btn" onClick={()=>{this.handleSubmit(item.id)}}>Add to cart</button>
        </div>
        
      </div>
    </div>
  </div>
  </div>
        )
    }
    
    )
    return(
        <div className="container">
            <h4 className="center">Choose your Destinations</h4><br/>
            <div className="conatiner" style={{display: 'flex', flexDirection: 'row', width:"120%"}}>
            {itemList}
            </div>
            
        </div>
    )

}}
const mapStateToProps=(state)=>{
    return{
        items: state.items
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        addItems:(id)=>{dispatch(addItems(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);