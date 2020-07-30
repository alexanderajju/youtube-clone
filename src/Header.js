import React from 'react';
import './Header.css';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar'


function Header() {
    return (
        <div className="header">
            <div className="header__left">
            <MenuIcon/>
            <img className="header__logo"
             src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt=""/>
            </div>
            
            <div className="header__input">
            <input type="text"/>
        <SearchIcon/>
            </div>
       
<div className="header__icons">
<VideoCallSharpIcon/>
        
        <AppsIcon/>
        <NotificationsIcon/>

        <Avatar
        alt="Aju Alex"
        src="https://yt3.ggpht.com/a-/AOh14Ghyd7X3-yGlE6I7ylN9ljC4_rHF3Be4X9EvwdfxYqM=s88-c-k-c0xffffffff-no-rj-mo"
        />
</div>
       
        </div>
    )
}

export default Header
