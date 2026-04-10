import React from 'react';

const Navbar = () => {
    return (
       <div className="lg:px-30 navbar lg:mb-0 mb-5">
  <div className="navbar-start">
    <div className="flex items-center gap-1 font-bold text-xl">
       <h3 className='text-transparent text-3xl bg-clip-text bg-linear-to-t from-[#4F39F6] to-[#9514FA] font-bold'>DigiTools</h3>
    </div>
  </div>
  <div className="navbar-center hidden md:flex">
    <ul className="menu menu-horizontal xl:gap-8 px-1 text-sm">
      <li><a>Products</a></li>
      <li><a>Features</a></li>
      <li><a>Pricing</a></li>
      <li><a>Testimonials</a></li>
      <li><a>FAQ</a></li>
    </ul>
  </div>
  <div className="navbar-end gap-5">
    <a className=""><i className="fa-solid fa-cart-shopping"></i></a>
    <a className="">Login</a>
    <a className="btn bg-red-500 rounded-full text-white">Get in Touch</a>
  </div>
</div>
    );
};

export default Navbar;