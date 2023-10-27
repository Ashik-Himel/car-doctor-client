import { Helmet } from "react-helmet-async";
import Banner from "../components/home/Banner";
import About from "../components/home/About";
import Services from "../components/home/Services";

const Home = () => {
  return (
    <main className="mb-16">
      <Helmet>
        <title>Car Doctor - Our Care For Your Car</title>
      </Helmet>

      <Banner />
      <About />
      <Services />
    </main>
  );
};

export default Home;