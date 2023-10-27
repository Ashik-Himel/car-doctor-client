import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import ServiceCard from "../ServiceCard";
import { Link, useLocation } from "react-router-dom";

const fetcherFunction = () => {
  return axios.get('https://car-doctor-express-server.vercel.app/services');
}

const Services = () => {
  const {data, isLoading} = useQuery({queryKey: ['services'], queryFn: fetcherFunction});
  const {pathname} = useLocation();

  return (
    <section className="mt-16">
      <div className="container">
        <div className="text-center">
          <span className='text-primary font-bold block mb-2'>Service</span>
          <h2 className='text-4xl font-bold mb-4 '>Our Service Area</h2>
          <p className='text-dark-3 max-w-[600px] mx-auto mb-8'>the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. </p>
        </div>

        {
          !isLoading ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {
              data?.data?.map(service => <ServiceCard key={service.service_id} service={service} />)
            }
          </div> : <div className="my-16 text-center text-primary">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        }

        <div className="text-center mt-8" style={pathname === '/services' ? {display: "none"} : {}}>
          <Link to='/services' className="btn btn-primary btn-outline" onClick={() => scrollTo(0, 0)}>More Services</Link>
        </div>
      </div>
    </section>
  );
};

export default Services;