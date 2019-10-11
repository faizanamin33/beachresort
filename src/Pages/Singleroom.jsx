import React, { Component } from "react";
import bcgDefault from "../images/room-1.jpeg";
import { RoomContext } from "../context";
import Hero from "./../components/Hero";
import { Link } from "react-router-dom";
import Banner from "./../components/Banner";
import StyleHero from "./../components/StyledHero";


class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      bcgDefault
    };
  }
  static contextType = RoomContext;
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <Hero>
          <Banner className="error">
            <h3>No Such Room found</h3>
            <Link to="/rooms" className="btn-primary">
              Back To RoomsPage
            </Link>
          </Banner>
        </Hero>
      );
    }

    const {
      images,
      name,
      price,
      size,
      capacity,
      pets,
      description,
      extras
    } = room;
    const [mainImg, ...restImg] = images
    return (
      <>
       
        <StyleHero img={mainImg ? mainImg : bcgDefault}>
           
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              Back To RoomsPage
            </Link>
          </Banner>
        </StyleHero>
        <section className="single-room">
          <div className="single-room-images">
            {restImg.map((item, index) => {
              return <img src={item} key={index} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>Details</h3>
              <p> {description}</p>
            </article>
            <article className="info">
              <h3>Info</h3>
              <h6>Price : ${price}</h6>
              <h6>Size : {size}SQFT</h6>
              <h6>
                {" "}
                Max Capacity:{" "}
                {capacity > 1 ? `${capacity} Peoples` : `${capacity} Person`}
              </h6>
              <h6>{pets? "Pets Allowed" : "No Pets allowed"}</h6>

            </article>
          </div>
        </section>
        <section className="room-extras">
            <h6>Extras</h6>
            <ul className="extras">
                {extras.map((item, index) => {
                    return <li key={item} > -{item}</li>
                })}
            </ul>
        </section>
      </>
    );
  }
}

export default SingleRoom;
