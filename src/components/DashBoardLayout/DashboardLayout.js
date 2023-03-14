import React from 'react';
import { NotificationContainer } from 'react-notifications';
import './Dashboard.scss';
import Sidebar from './SideBar';
import Header from './Header';

function DashboardLayout({ children }) {
  return (
    <>
      <NotificationContainer />
      <Sidebar />
      <Header />

      <main className='main-section'>{children}</main>
    </>
  );
}

export default DashboardLayout;
