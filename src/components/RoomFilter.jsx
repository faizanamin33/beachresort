import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./title";

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};
const RoomFilter = ({ rooms }) => {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;
  let types = getUnique(rooms, "type");
  types = ["all", ...types];
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  return (
    <section className="filter-container">
      <Title title="Search Result" />
      <form className="filter-form">
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            onChange={handleChange}
            className="form-control"
          >
            {types}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="capacity">guests allowed</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            onChange={handleChange}
            className="form-control"
          >
            {people}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="price">Price range ${price}</label>
          <input
            name="price"
            type="range"
            value={price}
            min={minPrice}
            max={maxPrice}
            id="price"
            className="form-control"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="size">RoomSize</label>
          <div className="size-inputs">
            <input
              type="number"
              value={minSize}
              name="minSize"
              id="size"
              onChange={handleChange}
              className="size-input"
            />

            <input
              type="number"
              value={maxSize}
              name="maxSize"
              id="size"
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              value={breakfast}
              id="breakfast"
              onChange={handleChange}
            />
            <label htmlFor="pets">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              value={pets}
              id="pets"
              onChange={handleChange}
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
      </form>
    </section>
  );
};

export default RoomFilter;
