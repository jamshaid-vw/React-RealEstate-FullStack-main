import Section1 from "./Sections/Section1";
import Section2 from "./Sections/Section2";
import Section3 from "./Sections/Section3";
import Section4 from "./Sections/Section4";
import Section5 from "./Sections/Section5";
import Footer from "./Sections/Footer";
import Hero from "components/features/Hero";
import { SliderData } from 'data/SliderData';

const Home = () => {
  return (
    <main>
      <Hero slides={ SliderData }/>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </main>
  );
};

export default Home;
