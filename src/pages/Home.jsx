import { Helmet } from "react-helmet-async";
import Banner from "../components/home/Banner";

const Home = () => {
  return (
    <main>
      <Helmet>
        <title>Car Doctor - Our Care For Your Car</title>
      </Helmet>

      <Banner />
    </main>
  );
};

export default Home;