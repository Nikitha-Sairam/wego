import React from 'react';
import FoodItem from './FoodItem';
import './FoodItems.css';

const FoodItems = ({foodItems}) => {
    console.log(foodItems);
    const renderFoodItems = () => {
        return foodItems.map(foodItem => {
            return <FoodItem key={foodItem.id} foodItem={foodItem} />
        });
    }

    return (
        <div className='food-items-cont'>
            {renderFoodItems()}
        </div>
    );
}

export default FoodItems