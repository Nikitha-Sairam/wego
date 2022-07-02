import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import TabMenu from './TabMenu';

const App = () => {
    const [seachText, setSearchText] = useState("");
    const [categories, setCategories] = useState([{name:"All", id:0}]);
    const [selectedTab, setSelectedTab] = useState(0);

    //Fetch all the data for display when the GUI loads initially
    useEffect(() => {
        const fetchCategories = async () => {
            const featchedCategories = await axios.get(
                "https://run.mocky.io/v3/f25ced0a-9ff7-4996-bdc7-430f281c48db"
            );
            console.log(featchedCategories.data);
            setCategories([...categories, ...featchedCategories.data])
            console.log(categories);
        }
        fetchCategories();
    }, []);

    return (
        <div>
            <SearchBar seachText={seachText} setSearchText={setSearchText}/>
            <TabMenu categories={categories} selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
        </div>
    );
};

export default App