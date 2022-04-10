import * as React from "react";
import PropTypes from "prop-types";
import Container from "../Layout/Container";

type HomeProps = {
  //
};

const Home: React.FC<HomeProps> = () => {
  return <Container>
    <div className="mt-10 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 min-h-screen">
      <div className="text-center">
        <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Lorem ipsum dolor sit amet</span>{' '}
          <span className="block text-primary-500 xl:inline">luctus metus</span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg md:mt-5 md:text-xl">
          Nulla congue purus eget nisl elementum vestibulum. Nullam suscipit ac ipsum vitae iaculis. Etiam varius volutpat mi, eget posuere ex rhoncus sodales.</p>
        <div className="mt-5 sm:mt-8 flex justify-center items-center gap-3">
          <div className="sm:mt-0 sm:ml-3">
            <a
              href="#"
              className="w-full flex items-center justify-center px-8 py-3 border text-base font-medium rounded-md border-primary-500 bg-primary-500 text-white hover:bg-white hover:text-primary-500 duration-200 trnasition-colors ease-in-out md:py-4 md:text-lg md:px-10"
            >
              CTA 1
            </a>
          </div>
          <div className="sm:mt-0 sm:ml-3">
            <a
              href="#"
              className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md hover:border-gray-300 duration-200 trnasition-colors ease-in-out md:py-4 md:text-lg md:px-10"
            >
              CTA 2
            </a>
          </div>
        </div>
      </div>
    </div>
  </Container>
};

Home.propTypes = {
  //
};

export default Home;
