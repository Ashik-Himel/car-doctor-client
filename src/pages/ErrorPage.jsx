import { Helmet } from 'react-helmet-async';
import errorImg from '../assets/images/errorPage/404.png';
import Header from '../components/Header';
const ErrorPage = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found - Car Doctor</title>
      </Helmet>
      
      <Header />
      <main className="py-16">
        <div className="container">
          <img className='max-w-[600px] mx-auto' src={errorImg} alt="404 Image" />
        </div>
      </main>
    </>
  );
};

export default ErrorPage;