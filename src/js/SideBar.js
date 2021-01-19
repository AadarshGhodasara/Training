import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../Css/SideBar.css';
 const Sidebar = props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/HookExample">
        Hook
      </a>
      <a className="menu-item" href="/Profile">
        Profile
      </a>
      <a className="menu-item" href="/Form">
        Form
      </a>
    </Menu>
  );
};

export default Sidebar;