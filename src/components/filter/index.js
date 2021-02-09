import React, { Component } from 'react'
import { connect } from 'react-redux'
import setFilterColor from '../../Actions/colorfilter'
//import setFilterMonth from '../../Actions/monthfilter'
import './style.css'

class Filter extends Component {
constructor()
{
    super()
    this.state = {
        selectedColor : "", 
        selectedMonth : ""
    }
    this.myRef = React.createRef();
    this.setFilterColorStore = this.setFilterColorStore.bind(this);
}


setFilterColorStore (event) {
    //   let mycolor = React.findDOMNode(this.myRef).style.color
       //console.log(event)
      //  this.setState({ selectedColor : event})
        console.log(this.state)
      // event.preventDefault();
       this.props.setFilterColorStore({ selectedColor : event });
      //updateproductlist()
    }

    render() {

        console.log("filters data in filters", this.props)

        const { filters:
            { colorfilter = [], monthfilter = []}
        } = this.props

        return <div className='filter'>
            <div style={{ backgroundColor: 'white' }}>
                {
                    colorfilter.map((data, key) => {
                         return <div ref= {this.myRef}  style={{ backgroundColor: data, height: 20, width: 20 }} onClick = {this.setFilterColorStore.bind(null,data)}  ></div>
                         })

                }
            </div>
            <div style={{ backgroundColor: 'yellow', width: 400, height: 10 }}></div>
            <div style={{ backgroundColor: 'white' }}>
                {
                    monthfilter.map((data, key) => { return <div style={{ backgroundColor: 'lightGrey', height: 15, width: 70 }}> {data} </div> })

                }
            </div>



        </div>
    }
}


const mapStateToProps = state => {
    console.log("data in filter", state)
    return {

        filters: state.productlistreducer.filters


    }
}

const mapDispatchToProps = {
    setFilterColorStore : setFilterColor 
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)