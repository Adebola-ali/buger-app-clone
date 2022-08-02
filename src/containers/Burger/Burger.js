import React, { Component } from 'react'
import Aux from '../../hoc/Auxilliary'
import Bread from '../../components/Bread/Bread'
import BuildControls from '../../components/Bread/BuildControls/BuildControls'
// import Navbar from '../../components/NavBar/Navbar'

const INGREDIENT_PRICES = {
  salad: 50,
  cheese: 100,
  bacon: 70,
  meat: 10
}
class Burger extends Component {

  state = {
    ingredients:{
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0,
    },
    totalPrice: 500
  }

  addIngredienHandler = (type)=>{
    const oldCount = this.state.ingredients[type]
    const updatedCount = oldCount+1
    if(updatedCount<=3){
      var updatedIngredients = {
        ...this.state.ingredients
      } 
    }

    updatedIngredients[type]= updatedCount;
    const priceAddition = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice + priceAddition
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    })
  }
  
  deleteIngredienHandler = (type)=>{
    const oldCount = this.state.ingredients[type]
    const updatedCount = oldCount-1
    if(updatedCount>=0){
      var updatedIngredients = {
        ...this.state.ingredients
      }}
    updatedIngredients[type]= updatedCount;
    const priceAddition = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice - priceAddition
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    })
  }

  render(){
    return (
      <Aux>
        {/* <Navbar/> */}
        <Bread ingredients= {this.state.ingredients}/>
        <BuildControls 
        price = {this.state.totalPrice}
        ingredientsAdded={this.addIngredienHandler} 
        ingredientsDeleted={this.deleteIngredienHandler}/>
      </Aux>
      )
  }
}

export default Burger