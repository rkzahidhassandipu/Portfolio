import React, { useEffect } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Pages/Shares/Navbar/Navbar';
import Footer from '../Pages/Shares/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MainLayout = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
