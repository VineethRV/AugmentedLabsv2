import LearnMoreBtn from "./learnMoreBtn";

import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="text-white p-4 flex items-center justify-center flex-col min-h-[600px] h-full">
      <h1 className="text-2xl md:text-4xl font-bold animate-slidein text-gradient-opacity">
        Augment Technology
      </h1>
      <h1 className="text-2xl md:text-4xl font-bold animate-slidein text-gradient-opacity">
        Advance Humanity
      </h1>
      <p className="text-sm mt-8 text-center animate-slidein ">
      Augmented Labs is dedicated to bringing cutting-edge technology that seamlessly integrates into everyday life, transforming innovative ideas into essential tools. Each product we release is unique, never before seen, pushing boundaries and redefining how technology enhances our daily activities, making them indispensable over time.
      </p>
      <Link to={"/About"}><LearnMoreBtn /></Link>
    </div>
  );
};

export default HeroSection;
