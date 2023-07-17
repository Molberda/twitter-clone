import React from 'react';
import '../CSS/Widgets.css'
import { Search } from '@mui/icons-material';

const Widgets = () => {
    return (
        <div className='widgets'>
            <div className="widgets__input">
                <Search className='widgets__searchIcon'/> 
                <input placeholder='Search Twitter' type="text" />
            </div>
            <div className="widgets__widgetContainer">
                <h2>Whats Happening</h2>
            </div>
        </div>
    );
}

export default Widgets;
