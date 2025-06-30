import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { MdEmail, MdPhone, MdShoppingCart, MdAccountCircle } from 'react-icons/md';
import { BiSupport } from 'react-icons/bi';

const Footer = () => {
  return (
    <footer className='bg-slate-800 text-white'>
      {/* Main Footer Content */}
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          
          {/* Company Info */}
          <div className='space-y-4'>
            <h3 className='text-2xl font-bold text-red-500'>ShopEase</h3>
            <p className='text-slate-300 text-sm leading-relaxed'>
              Your trusted online marketplace for quality products at unbeatable prices. 
              From electronics to fashion, we bring you the latest trends and essentials 
              for your everyday needs.
            </p>
            <div className='flex space-x-4 pt-2'>
              <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' 
                 className='text-slate-400 hover:text-blue-400 transition-colors duration-300'>
                <FaFacebook size={22} />
              </a>
              <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'
                 className='text-slate-400 hover:text-sky-400 transition-colors duration-300'>
                <FaTwitter size={22} />
              </a>
              <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'
                 className='text-slate-400 hover:text-pink-400 transition-colors duration-300'>
                <FaInstagram size={22} />
              </a>
              <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'
                 className='text-slate-400 hover:text-blue-600 transition-colors duration-300'>
                <FaLinkedin size={22} />
              </a>
              <a href='https://youtube.com' target='_blank' rel='noopener noreferrer'
                 className='text-slate-400 hover:text-red-500 transition-colors duration-300'>
                <FaYoutube size={22} />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className='space-y-4'>
            <h4 className='text-lg font-semibold text-red-400 border-b border-slate-700 pb-2'>Quick Links</h4>
            <ul className='space-y-3'>
              <li>
                <Link to='/' className='text-slate-300 hover:text-white transition-colors duration-300 flex items-center text-sm'>
                  <span className='mr-2'>🏠</span> Home
                </Link>
              </li>
              <li>
                <Link to='/product' className='text-slate-300 hover:text-white transition-colors duration-300 flex items-center text-sm'>
                  <MdShoppingCart className='mr-2' size={16} /> All Products
                </Link>
              </li>
              <li>
                <Link to='/login' className='text-slate-300 hover:text-white transition-colors duration-300 flex items-center text-sm'>
                  <MdAccountCircle className='mr-2' size={16} /> My Account
                </Link>
              </li>
              <li>
                <Link to='/cart' className='text-slate-300 hover:text-white transition-colors duration-300 flex items-center text-sm'>
                  <span className='mr-2'>🛒</span> Shopping Cart
                </Link>
              </li>
              <li>
                <Link to='/admin-panel' className='text-slate-300 hover:text-white transition-colors duration-300 flex items-center text-sm'>
                  <span className='mr-2'>⚙️</span> Admin Panel
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div className='space-y-4'>
            <h4 className='text-lg font-semibold text-red-400 border-b border-slate-700 pb-2'>Categories</h4>
            <ul className='space-y-3'>
              <li>
                <Link to='/category/mobiles' className='text-slate-300 hover:text-white transition-colors duration-300 text-sm'>
                  📱 Mobiles & Tablets
                </Link>
              </li>
              <li>
                <Link to='/category/electronics' className='text-slate-300 hover:text-white transition-colors duration-300 text-sm'>
                  💻 Electronics
                </Link>
              </li>
              <li>
                <Link to='/category/watches' className='text-slate-300 hover:text-white transition-colors duration-300 text-sm'>
                  ⌚ Watches
                </Link>
              </li>
              <li>
                <Link to='/category/camera' className='text-slate-300 hover:text-white transition-colors duration-300 text-sm'>
                  📷 Camera & Photography
                </Link>
              </li>
              <li>
                <Link to='/category/speakers' className='text-slate-300 hover:text-white transition-colors duration-300 text-sm'>
                  🔊 Audio & Speakers
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Support & Newsletter */}
          <div className='space-y-4'>
            <h4 className='text-lg font-semibold text-red-400 border-b border-slate-700 pb-2'>Support & Contact</h4>
            
            {/* Contact Info */}
            <div className='space-y-3'>
              <div className='flex items-center space-x-3'>
                <MdEmail className='text-red-400' size={18} />
                <span className='text-slate-300 text-sm'>support@shopease.com</span>
              </div>
              <div className='flex items-center space-x-3'>
                <MdPhone className='text-red-400' size={18} />
                <span className='text-slate-300 text-sm'>+1 (555) 123-4567</span>
              </div>
              <div className='flex items-center space-x-3'>
                <BiSupport className='text-red-400' size={18} />
                <Link to='/support' className='text-slate-300 hover:text-white text-sm'>24/7 Customer Support</Link>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className='mt-6'>
              <h5 className='text-sm font-medium text-red-400 mb-3'>Stay Updated</h5>
              <div className='flex flex-col space-y-2'>
                <input 
                  type='email' 
                  placeholder='Enter your email address'
                  className='px-3 py-2 text-sm bg-slate-700 border border-slate-600 rounded-md focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 text-white placeholder-slate-400'
                />
                <button className='px-4 py-2 bg-red-600 text-white text-sm rounded-md hover:bg-red-700 transition-colors duration-300 transform hover:scale-105'>
                  Subscribe to Newsletter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;