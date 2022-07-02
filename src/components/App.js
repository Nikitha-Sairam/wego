import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import TabMenu from './TabMenu';
import FoodItems from './FoodItems';
import './App.css';

const App = () => {
    const [searchText, setSearchText] = useState("");
    const [categories, setCategories] = useState([{name:"All", id:0}]);
    const [selectedTab, setSelectedTab] = useState(0);
    const [foodItems, setFoodItems] = useState({all:[]});
    const [selectedFoodList, setSelectedFoodList] = useState([]);
    const [showAll, setShowAll] = useState(false);

    //Fetch all the data for display when the GUI loads initially
    useEffect(() => {
        const fetchCategories = async () => {
            const featchedCategories = await axios.get(
                "https://run.mocky.io/v3/f25ced0a-9ff7-4996-bdc7-430f281c48db"
            );
            setCategories([...categories, ...featchedCategories.data]);
            const fetchedFoodItems = await axios.get(
                "https://run.mocky.io/v3/a24cfec5-f76c-410b-a5ac-9f63fab28abb"
            );

            // Categorizing the fetched food items
            let itemsObj = {}
            fetchedFoodItems.data.forEach(item => {
                if (!itemsObj[item.categoryId]) {
                    itemsObj[item.categoryId] = [];
                }
                itemsObj[item.categoryId].push(item);
            });
            setFoodItems({0:[...fetchedFoodItems.data], ...itemsObj});
        }
        fetchCategories();
    }, []);

    // Setting the tab value when the app launches for the first time
    useEffect(() => {
        if(foodItems['0']) {
            changeSelectedTab(0);
        }
    }, [foodItems]);

    //Filtering the data based on search text
    useEffect(() => {
        if (foodItems[categories[selectedTab].id]) {
            let foodList = foodItems[categories[selectedTab].id].filter(item => {
                return item.restaurant.toLowerCase().includes(searchText.trim().toLowerCase());
            })
            setSelectedFoodList(showAll ? foodList : foodList.slice(0,10));
        }
    }, [searchText, showAll]);

    const changeSelectedTab = (tabIndex) => {
        setSelectedTab(tabIndex);
        let foodList = foodItems[categories[tabIndex].id].filter(item => {
            return item.restaurant.includes(searchText);
        });
        setSelectedFoodList(showAll ? foodList : foodList.slice(0,10));
    }

    const renderShowAllBtn = () => {
        return showAll ? null : foodItems['0'] ? (
            <div className='show-more-btn-cont'>
                <div className='show-more-btn' onClick={e => setShowAll(true)}>
                    + Show More
                </div>
            </div>
        ) : null;
    }

    return (
        <div style={{padding: '30px', fontFamily: 'sans-serif'}}>
            <SearchBar searchText={searchText} setSearchText={setSearchText}/>
            <TabMenu
                categories={categories}
                selectedTab={selectedTab}
                setSelectedTab={changeSelectedTab}
            />
            <FoodItems foodItems={selectedFoodList}/>
            {renderShowAllBtn()}
        </div>
    );
};

export default App