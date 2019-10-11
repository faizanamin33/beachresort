import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

const Room = ({ room }) => {
  const { name, price, slug, images } = room;
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0]} alt="Featured rooms" />
        <div className="price-top">
          <h6>${price} </h6>
          <p>PerNight</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link" >Featured</Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
};
Room.propTypes = {
    room:PropTypes.shape({
        name:PropTypes.string.isRequired,
        price:PropTypes.number.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,

        
    })
}

export default Room;

