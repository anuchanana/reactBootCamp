import React, { Component } from 'react'
import "./style.css"

class Productitem extends Component {

    render() {
        const dataarray = this.props.mydata
        console.log(dataarray, "dataarray")
        return <div className='productitem'>
            {
                dataarray.map((data, key) =>
                    <div style={{ backgroundColor: data.color , height:20, width: 20}}/>

                )
            }

        </div>
    }
}
export default Productitem