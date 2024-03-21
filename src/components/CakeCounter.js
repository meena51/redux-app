import React from 'react'
//connect keyword is used to connect this redux to react 
import {  connect } from 'react-redux'
import {buyCake} from '../redux/cakes/cakeActions'
function CakeCounter(props) {
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}
const mapStateToProps = (state) =>{
    return {
        numOfCakes : state.numOfCakes //selecting state 
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        buyCake : ()=>dispatch(buyCake())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CakeCounter)
