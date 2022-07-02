import React from 'react';
import './TabMenu.css';

const TabMenu = ({categories, selectedTab, setSelectedTab}) => {
    // Create the list of tabs from the fetched categories
    const renderTabs = (categories) => {
        console.log(categories);
        return categories.map((category, index) => {
            return (
                <div key={category.id}
                    className={`tab-item ${index === categories.length - 1 ? "last-tab" : ""} ${index===selectedTab ? "selected" : ""} ${index ? "" : "first-tab"}`}
                    id={index}
                    onClick={e => setSelectedTab(+e.target.getAttribute("id"))}
                >
                    {category.name}
                </div>
            );
        })
    }


    return (
        <div className="tab-menu">
            {renderTabs(categories)}
        </div>
    );
};

export default TabMenu