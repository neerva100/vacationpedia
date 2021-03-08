import React from 'react'
import { connect } from 'react-redux'
class Recipe extends React.Component{
    render(){
        return(
            <div>
                <h2>
                    Total Charges=${this.props.total}
                </h2>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
   return{
        total: state.total
     }
}
export default connect(mapStateToProps)(Recipe)