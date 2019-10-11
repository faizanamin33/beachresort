import React from "react";
import Hero from "./../components/Hero";
import Banner from './../components/Banner';
import { Link } from 'react-router-dom';


const Error = () => {
  return <Hero>
      <Banner subtitle="Page NotFound">
        <Link to="/" className="btn-primary">
          Back To HomePage
        </Link>
      </Banner>
  </Hero>;
};

export default Error;
