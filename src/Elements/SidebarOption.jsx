import React from 'react';
import '../CSS/SidebarOption.css'

const SidebarOption = ({ Icon, title }) => {
    return (
        <div className='sidebarOption'>
            {Icon}
            <h2>{title}</h2>
        </div>
    );
}

export default SidebarOption;
