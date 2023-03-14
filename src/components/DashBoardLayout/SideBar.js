import React from 'react';
import { Link } from 'react-router-dom';
import { sideBarItems } from './SideBarItems';
function Sidebar() {
  return (
    <div className='sidebar-container'>
      <h2>Farm Lend</h2>
      <div className='list-section'>
        {sideBarItems.map((item, index) => (
          <div key={index}>
            <strong>{item.name}</strong>
            <ul>
              {item.links.map((link, id) => (
                <li key={id}>
                  <Link to={link.pathname} state={link.state}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
