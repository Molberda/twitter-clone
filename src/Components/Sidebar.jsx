import React from 'react';
import '../CSS/Sidebar.css'
import { AccountCircleOutlined, BookmarkBorderOutlined,  Home, ListAltOutlined, MailOutline, MoreHorizOutlined, NotificationsNone, Search, Twitter, VerifiedOutlined } from '@mui/icons-material';
import SidebarOption from '../Elements/SidebarOption';
import { Button } from '@mui/material';


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Twitter className='sidebar__twitterIcon'/>

            <SidebarOption active Icon={<Home/>} title='Home'/>
            <SidebarOption Icon={<Search/>} title='Explore'/>
            <SidebarOption Icon={<NotificationsNone/>} title='Notifications'/>
            <SidebarOption Icon={<MailOutline/>} title='Messages'/>
            <SidebarOption Icon={<ListAltOutlined/>} title='Lists'/>
            <SidebarOption Icon={<BookmarkBorderOutlined/>} title='Bookmarks'/>
            <SidebarOption Icon={<VerifiedOutlined/>} title='Verified'/>
            <SidebarOption Icon={<AccountCircleOutlined/>} title='Profile'/>
            <SidebarOption Icon={<MoreHorizOutlined/>} title='More'/>

            <Button  className='sidebar__tweet' fullWidth ><h2>Tweet</h2></Button>
        </div>
    );
}

export default Sidebar;
