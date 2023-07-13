import React from 'react';
import '../CSS/Sidebar.css'
import { Twitter } from '@mui/icons-material';
import SidebarOption from '../Elements/SidebarOption';


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Twitter/>

            <SidebarOption icon='' title=''/>
        </div>
    );
}

export default Sidebar;
