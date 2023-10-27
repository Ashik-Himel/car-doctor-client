import PropTypes from 'prop-types';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
  const {service_id, img, title, price} = service
  console.log(service);

  return (
    <div className='border rounded-lg p-6'>
      <img className='rounded-lg aspect-[4/3] object-cover mb-4' src={img} alt="Service Image" />
      <h3 className='text-2xl font-bold mb-3 text-dark-2'>{title}</h3>
      <div className='flex justify-between items-center gap-4 text-primary text-xl font-semibold'>
        <p>Price: ${price}</p>
        <Link to={`/services/${service_id}`} onClick={() => scrollTo(0, 0)}><AiOutlineArrowRight /></Link>
      </div>
    </div>
  );
};

export default ServiceCard;

ServiceCard.propTypes = {
  service: PropTypes.object
}