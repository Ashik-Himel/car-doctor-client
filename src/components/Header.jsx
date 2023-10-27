import { Link, NavLink } from "react-router-dom";
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { LuSearch } from 'react-icons/lu';
import { AiOutlineMenu } from 'react-icons/ai';
import brandLogo from '../assets/logo.svg';
import { useState } from "react";

const Header = () => {
  const [drawerShow, setDrawerShow] = useState(false);

  return (
    <header className="text-dark-2 font-semibold py-4">
      <div className="container">
        <nav className="flex justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <AiOutlineMenu className="md:hidden text-2xl select-none cursor-pointer" onClick={() => setDrawerShow(!drawerShow)} />
            <Link to='/' onClick={() => {
              scrollTo(0, 0)
              setDrawerShow(false)
              }}>
              <img className="w-full max-w-[60px] md:max-w-[80px]" src={brandLogo} alt="Car Doctor Logo" />
            </Link>
          </div>

          <ul className="flex justify-center items-center gap-6 fixed md:static top-0 bottom-0 -right-full w-4/5 md:w-full max-w-[320px] md:max-w-none bg-white md:bg-none z-20 flex-col md:flex-row [box-shadow:-10px_0px_50px_rgba(0,0,0,0.4)] md:[box-shadow:none] transition-[right]" style={drawerShow ? {right: '0'} : {}}>
            <li>
              <NavLink to='/' className={({isActive}) => isActive ? 'font-bold border-b-2 text-primary border-primary' : ''} onClick={() => setDrawerShow(false)}>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about' className={({isActive}) => isActive ? 'font-bold border-b-2 text-primary border-primary' : ''} onClick={() => setDrawerShow(false)}>About</NavLink>
            </li>
            <li>
              <NavLink to='/services' className={({isActive}) => isActive ? 'font-bold border-b-2 text-primary border-primary' : ''} onClick={() => setDrawerShow(false)}>Services</NavLink>
            </li>
            <li>
              <NavLink to='/blog' className={({isActive}) => isActive ? 'font-bold border-b-2 text-primary border-primary' : ''} onClick={() => setDrawerShow(false)}>Blog</NavLink>
            </li>
            <li>
              <NavLink to='/contact' className={({isActive}) => isActive ? 'font-bold border-b-2 text-primary border-primary' : ''} onClick={() => setDrawerShow(false)}>Contact</NavLink>
            </li>
          </ul>

          <div className="flex justify-center items-center gap-4 text-xl">
            <HiOutlineShoppingBag />
            <LuSearch />
            <Link to='/login' className="btn btn-primary btn-outline" onClick={() => scrollTo(0, 0)}>Login</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;