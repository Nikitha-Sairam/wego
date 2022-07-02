import React from 'react';
import './FoodItem.css'
import star from './star.svg';
import gift from './gift.png';

const FoodItem = ({foodItem}) => {
    const isNew = () => {
        return foodItem.isNew ? <div className='new-item'>New</div> : null;
    }

    const renderOffers = () => {
        switch(foodItem.promotion) {
            case 'gift':
                return (
                    <div className="promotion gift">
                        <img src={gift} alt=""/>
                    </div>
                );
            case '1+1':
                return (
                    <div className="promotion buy-one-get-two">
                        1 + 1
                    </div>
                );
            case 'discount':
                return (
                    <div className="promotion discount">
                        %
                    </div>
                );
            default:
                return null;
        }
    }

    return (
        <div className='food-item-tile'>
            <div className=''>
                {renderOffers()}
            </div>
            <img className='food-image' src={foodItem.imageUrl} alt=""/>
            <div className='item-name'>
                {foodItem.name}
            </div>
            <div className='item-details'>
                <span className='rating'>
                    <img src={star} className='star-rating-icon' alt=""/>
                    {foodItem.rating.toFixed(1)}
                </span>
                <span className='cooking-time'>{foodItem.minCookTime} - {foodItem.maxCookTime} min</span>
                {isNew()}
            </div>
        </div>
    )
}

export default FoodItem