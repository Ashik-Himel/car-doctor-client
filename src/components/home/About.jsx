import aboutPerson from '../../assets/images/about_us/person.jpg';
import aboutParts from '../../assets/images/about_us/parts.jpg';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="mt-16">
      <div className="container">
        <div className='flex flex-col md:flex-row items-center gap-8 md:gap-14 [&>*]:flex-1'>
          <div className='relative mb-[100px]'>
            <img className='rounded-lg w-[calc(100%-80px)] aspect-square object-cover object-[left]' src={aboutPerson} alt="Person Image" />
            <img className='absolute -bottom-[100px] right-0 w-1/2 border-8 border-white rounded-lg aspect-square object-cover object-center' src={aboutParts} alt="Parts Image" />
          </div>

          <div>
            <span className='text-primary font-bold block mb-2'>About Us</span>
            <h2 className='text-5xl font-bold mb-4 max-w-[400px] leading-[1.2]'>We are qualified & of experience in this field</h2>
            <p className='text-dark-3 max-w-[500px] mb-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. </p>
            <p className='text-dark-3 max-w-[500px] mb-6'>the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. </p>
            <Link to='/about' className='btn btn-primary' onClick={() => scrollTo(0, 0)}>Get More Info</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;