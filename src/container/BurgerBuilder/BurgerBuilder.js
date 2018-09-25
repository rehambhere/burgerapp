import React ,{Component,Fragment }from 'react';
import Burger from '../../component/Burger/Burger';
import BurgerControlls from '../../component/Burger/BurgerControllers/BurgerControllers';
const PriceType={
    salad: 4,
    bacon: 5,
    cheese: 20,
    meat: 30
}
class BurgerBuilder extends Component{

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice:4
    }

    addIngredient=(type)=>{
        let oldCount=this.state.ingredients[type];
        let newCount= oldCount+1;
        let updateIngredient={
                ...this.state.ingredients
        }
        updateIngredient[type]= newCount;
        let PriceAddition= PriceType[type];
        let oldPrice= this.state.oldPrice;
        let newPrice= oldPrice+PriceAddition;

        this.setState({
            ingredients :updateIngredient,
            totalPrice:newPrice
        })
    }

    removeIngredient=(type)=>{
        let oldCount=this.state.ingredients[type];
        if(oldCount<=0){
            return;
        }
        let newCount= oldCount-1;
        let updateIngredient={
                ...this.state.ingredients
        }
        updateIngredient[type]= newCount;
        let PriceAddition= PriceType[type];
        let oldPrice= this.state.oldPrice;
        let newPrice= oldPrice-PriceAddition;

        this.setState({
            ingredients :updateIngredient,
            totalPrice:newPrice
        }) 
    }
    render(){
        const disabledInfo={
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key]<=0
        }
        return(
            <Fragment>
             <Burger ingredients={this.state.ingredients} />

            <BurgerControlls addIngred={this.addIngredient} 
              removeIngred={this.removeIngredient}  
                  disabled={disabledInfo}
              />
            </Fragment>
        )
    }
}

export default BurgerBuilder;

