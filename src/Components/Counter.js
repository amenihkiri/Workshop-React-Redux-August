import React from 'react'
import {connect} from "react-redux"
import {increment,decrement} from "./Actions/Actions"

//react
function Counter(props) {
    return (
        <div style={{backgroundColor:"lightblue"}}>
            <button onClick={props.increment}>↑</button>
            <h1>{props.count}</h1>
            <button onClick={props.decrement}>↓</button>
            
        </div>
    )
}



//redux
//1 

const mapStateToProps =state=>{
    return {count: state}
}

//2 
const mapDispatchToProps=dispatch=>{
    return {
       increment:()=>{dispatch(increment())},
       decrement:()=>{dispatch(decrement())}
    }
}




//connect react to redux
export default connect (mapStateToProps,mapDispatchToProps) (Counter)
