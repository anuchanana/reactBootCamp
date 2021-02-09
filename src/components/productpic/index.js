import React, { Component } from 'react'
import './style.css'

function Productpic(props) {
    console.log(props.mycolor, "mycolor"
    )
    return <div className='productpic' style={{
        backgroundColor: props.mycolor

    }} ></div>

}

export default Productpic 