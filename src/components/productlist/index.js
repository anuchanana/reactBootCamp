import React, { Component } from 'react'
import Product from '../product'
import { connect } from 'react-redux'
import Productlistaction from '../../Actions/productlistaction'
import './style.css'

class Productlist extends Component {

    componentDidMount() {
        this.props.productlistddata()
    }

    render() {
        console.log("datalin list", this.props)
        const { prodlist: { productlistreducer
        },
            selectedColor:{selectedColor}
        } = this.props

        /*
                let colorfilter = []
                let monthfilter = []
        
                for (let listelement of productlistreducer.data) {
        
                    for (let prodelement of listelement.Variant) {
                        if (colorfilter.indexOf(prodelement.color) <= -1) {
                            colorfilter.push(prodelement.color)
                        }
                        for (let monthelem of prodelement.months ){
                            if (monthfilter.indexOf(monthelem) <= -1) {
                                monthfilter.push(monthelem)
                            }  
                        }
                    }
                }
        
        console.log(colorfilter,  "colorfiletr")
        console.log(monthfilter,  "monthfilter")
        
        */
        /*
                let productToShow = []
        
                for (let listelement of productlistreducer.data) {
        
                    for (let prodelement of listelement.Variant) {
                        if (colorfilter.indexOf(prodelement.color) <= -1) {
                            colorfilter.push(prodelement.color)
                        }
                    }
                }
        */
        return (<div className='productList' >
            { productlistreducer.data.map(
                (data, key) => {

                    let productToShow
                    if  (selectedColor.selectedColor) {                       
                            for (let prodelement of data.Variant) {                               
                                if (prodelement.color === selectedColor.selectedColor) {
                                    productToShow =  <Product {...data} />
                                }
                            }
                       return productToShow 
                    }
                    else {
                        return <Product {...data} />
                    }
                })}
        </div>)
    }

}

const mapDispaTchtoProps = {
    productlistddata: Productlistaction
}

const mapStateToProps = state => {
    console.log("data in state", state)

    return {

        prodlist: state,
        selectedColor: state.productlistreducer.selectedColor

    }
}

export default connect(mapStateToProps, mapDispaTchtoProps)(Productlist)