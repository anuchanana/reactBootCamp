import React, {Component} from 'react'
import './style.css'

class Productdesc extends Component{

    render()
    {
        return <div className = 'productdesc'>   

        <div>name: {this.props.myname}</div> 
        <div>brand: {this.props.mybrand}</div> 
        <div>cost: {this.props.mycost}</div>      
        </div>
    }
}

    export default Productdesc