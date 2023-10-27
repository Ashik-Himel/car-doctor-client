import brandLogo from '../assets/logo.svg';
import {FaFacebookF, FaLinkedinIn} from "react-icons/fa";
import {BsTwitter, BsInstagram} from "react-icons/bs";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark-1 text-dark-7 py-16">
      <div className="container">
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between gap-10 md:gap-16'>
          <div>
            <img className='w-[80px]' src={brandLogo} alt="Car Doctor's Logo" />
            <p className='max-w-[300px] mt-4'>Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
            <div className='mt-4 flex items-center gap-2'>
              <a className='bg-dark-2 p-3 rounded-full' href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a className='bg-dark-2 p-3 rounded-full' href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                <BsTwitter />
              </a>
              <a className='bg-dark-2 p-3 rounded-full' href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <BsInstagram />
              </a>
              <a className='bg-dark-2 p-3 rounded-full' href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <div className='[&>*]:block space-y-3'>
            <h4 className='text-2xl font-medium mb-6'>Pages</h4>
            <Link to='/' onClick={() => scrollTo(0, 0)}>Home</Link>
            <Link to='/services' onClick={() => scrollTo(0, 0)}>Services</Link>
            <Link to='/blog' onClick={() => scrollTo(0, 0)}>Blog</Link>
          </div>

          <div className='[&>*]:block space-y-3'>
            <h4 className='text-2xl font-medium mb-6'>About</h4>
            <Link to='/about' onClick={() => scrollTo(0, 0)}>About</Link>
            <Link to='/contact' onClick={() => scrollTo(0, 0)}>Contact</Link>
          </div>

          <div className='[&>*]:block space-y-3'>
            <h4 className='text-2xl font-medium mb-6'>Social</h4>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;