import React, { Component } from 'react'
import Productdesc from '../productdesc'
import Productitem from '../productitem'
import Productpic from '../productpic'
import './style.css'

class Product extends Component {

    render() {

        const {
            props: {
                Variant,brand,name }
        } = this

        let piccolor 
        let cost

        console.log("data in this product ", this)
        console.log("varient", Variant)
        console.log("brand", brand)
        console.log("name", name)
        for (let element of Variant) {
            for (let objkey in element) {
                if (objkey == "type" && element[objkey] == "default") {
                    console.log("inside if", objkey)
                    this.piccolor = element['color']
                    this.cost = element['cost']
                }

            }
        }
        console.log("after if piccolor", this.piccolor )

        return <div className="product">
            <Productpic mycolor={this.piccolor}></Productpic>
            <div>
                <Productdesc myname={this.name} mybrand={this.brand} mycost={this.cost}></Productdesc>
                <Productitem mydata={Variant}></Productitem>
            </div>
        </div>
    }
}

export default Product


