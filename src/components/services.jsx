import React, { Component } from "react";
import { FaCocktail, FaBeer, FaHiking, FaShuttleVan } from "react-icons/fa";
import Title from "./title";

class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, provident."
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, provident."
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, provident."
      },
      {
        icon: <FaBeer />,
        title: "Endless Beer",
        info:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, provident."
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article className="service" key={index}>
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p> {item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
