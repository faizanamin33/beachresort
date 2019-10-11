import React from "react";
import Hero from "./../components/Hero";
import Banner from "./../components/Banner";
import { Link } from "react-router-dom";
import Services from './../components/services';
import FeaturedRoom from './../components/FeaturedRooms';

const Home = () => {
  return (
    <>
    <Hero>
      <Banner title="Luxrious Rooms" subtitle="Delux rooms starting at 299$.">
        <Link to="/rooms" className="btn-primary">
          Our Rooms
        </Link>
      </Banner>
    </Hero>
    <Services/>
    <FeaturedRoom/>
    </>
  );
};

export default Home;
