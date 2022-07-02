import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';

const App = () => {
    const [seachText, setSearchText] = useState("");

    //Fetch all the data for display when the GUI loads initially
    useEffect(() => {
        const fetchCategories = async () => {
            const categories = await axios.get("https://run.mocky.io/v3/f25ced0a-9ff7-4996-bdc7-430f281c48db");
            console.log(categories.data);
        }
        fetchCategories();
    }, []);

    return (
        <div>
            <SearchBar seachText={seachText} setSearchText={setSearchText}/>
        </div>
    );
};

export default App