import { Helmet } from "react-helmet-async";
import About from "../components/home/About";

const AboutPage = () => {
  return (
    <main className="mb-16">
      <Helmet>
        <title>About - Car Doctor</title>
      </Helmet>
      
      <About />
    </main>
  );
};

export default AboutPage;