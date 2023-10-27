import { Helmet } from "react-helmet-async";
import Services from "../components/home/Services";

const ServicesPage = () => {
  return (
    <main className="mb-16">
      <Helmet>
        <title>Services - Car Doctor</title>
      </Helmet>
      
      <Services />
    </main>
  );
};

export default ServicesPage;