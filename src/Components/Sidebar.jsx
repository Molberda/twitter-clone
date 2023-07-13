import React from 'react';
import '../CSS/Sidebar.css'
import { AccountCircleOutlined, BookmarkBorderOutlined, FormatListBulletedOutlined, Home, MailOutline, MoreHorizOutlined, NotificationsNone, Search, Twitter, VerifiedOutlined } from '@mui/icons-material';
import SidebarOption from '../Elements/SidebarOption';


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Twitter/>

            <SidebarOption Icon={<Home/>} title='Home'/>
            <SidebarOption Icon={<Search/>} title='Explore'/>
            <SidebarOption Icon={<NotificationsNone/>} title='Notifications'/>
            <SidebarOption Icon={<MailOutline/>} title='Messages'/>
            <SidebarOption Icon={<FormatListBulletedOutlined/>} title='Lists'/>
            <SidebarOption Icon={<BookmarkBorderOutlined/>} title='Bookmarks'/>
            <SidebarOption Icon={<VerifiedOutlined/>} title='Verified'/>
            <SidebarOption Icon={<AccountCircleOutlined/>} title='Profile'/>
            <SidebarOption Icon={<MoreHorizOutlined/>} title='More'/>
        </div>
    );
}

export default Sidebar;
