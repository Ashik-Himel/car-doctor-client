import { Link } from 'react-router-dom';
import bannerImg1 from '../../assets/images/homeCarousel/1.jpg';
import bannerImg2 from '../../assets/images/homeCarousel/2.jpg';
import bannerImg3 from '../../assets/images/homeCarousel/3.jpg';
import bannerImg4 from '../../assets/images/homeCarousel/4.jpg';

const Banner = () => {
  return(
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full min-h-[500px] md:min-h-0 md:max-h-[550px]">
        <img src={bannerImg1} className="w-full object-cover object-center" />
        <div className='bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0.1)] absolute inset-0 text-white flex items-center ps-10 md:ps-16 lg:ps-24 pe-6'>
          <div className='max-w-[450px]'>
            <h2 className='text-4xl md:text-6xl font-bold leading-[1.3] md:leading-[1.1] mb-6'>Affordable Price For Car Servicing</h2>
            <p className='mb-8'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className='flex flex-wrap gap-4'>
              <Link to='/services' className='btn btn-primary' onClick={() => scrollTo(0, 0)}>Our Services</Link>
              <Link to='/about' className='btn btn-outline text-white' onClick={() => scrollTo(0, 0)}>About Us</Link>
            </div>
          </div>
        </div>
        <div className="absolute right-8 bottom-8 flex justify-end items-center gap-3">
          <a href="#slide4" className="btn btn-primary rounded-full">❮</a>
          <a href="#slide2" className="btn btn-primary rounded-full">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full min-h-[500px] md:min-h-0 md:max-h-[550px]">
        <img src={bannerImg2} className="w-full object-cover object-center" />
        <div className='bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0.1)] absolute inset-0 text-white flex items-center ps-10 md:ps-16 lg:ps-24 pe-6'>
          <div className='max-w-[450px]'>
            <h2 className='text-4xl md:text-6xl font-bold leading-[1.3] md:leading-[1.1] mb-6'>Affordable Price For Car Servicing</h2>
            <p className='mb-8'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className='flex flex-wrap gap-4'>
              <Link to='/services' className='btn btn-primary' onClick={() => scrollTo(0, 0)}>Our Services</Link>
              <Link to='/about' className='btn btn-outline text-white' onClick={() => scrollTo(0, 0)}>About Us</Link>
            </div>
          </div>
        </div>
        <div className="absolute right-8 bottom-8 flex justify-end items-center gap-3">
          <a href="#slide1" className="btn btn-primary rounded-full">❮</a>
          <a href="#slide3" className="btn btn-primary rounded-full">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full min-h-[500px] md:min-h-0 md:max-h-[550px]">
        <img src={bannerImg3} className="w-full object-cover object-center" />
        <div className='bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0.1)] absolute inset-0 text-white flex items-center ps-10 md:ps-16 lg:ps-24 pe-6'>
          <div className='max-w-[450px]'>
            <h2 className='text-4xl md:text-6xl font-bold leading-[1.3] md:leading-[1.1] mb-6'>Affordable Price For Car Servicing</h2>
            <p className='mb-8'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className='flex flex-wrap gap-4'>
              <Link to='/services' className='btn btn-primary' onClick={() => scrollTo(0, 0)}>Our Services</Link>
              <Link to='/about' className='btn btn-outline text-white' onClick={() => scrollTo(0, 0)}>About Us</Link>
            </div>
          </div>
        </div>
        <div className="absolute right-8 bottom-8 flex justify-end items-center gap-3">
          <a href="#slide2" className="btn btn-primary rounded-full">❮</a>
          <a href="#slide4" className="btn btn-primary rounded-full">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full min-h-[500px] md:min-h-0 md:max-h-[550px]">
        <img src={bannerImg4} className="w-full object-cover object-center" />
        <div className='bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0.1)] absolute inset-0 text-white flex items-center ps-10 md:ps-16 lg:ps-24 pe-6'>
          <div className='max-w-[450px]'>
            <h2 className='text-4xl md:text-6xl font-bold leading-[1.3] md:leading-[1.1] mb-6'>Affordable Price For Car Servicing</h2>
            <p className='mb-8'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className='flex flex-wrap gap-4'>
              <Link to='/services' className='btn btn-primary' onClick={() => scrollTo(0, 0)}>Our Services</Link>
              <Link to='/about' className='btn btn-outline text-white' onClick={() => scrollTo(0, 0)}>About Us</Link>
            </div>
          </div>
        </div>
        <div className="absolute right-8 bottom-8 flex justify-end items-center gap-3">
          <a href="#slide3" className="btn btn-primary rounded-full">❮</a>
          <a href="#slide1" className="btn btn-primary rounded-full">❯</a>
        </div>
      </div>
    </div>
  )
};

export default Banner;