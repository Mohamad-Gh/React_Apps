import React from "react";
import TestimonialCard from "./TestimonialCard";
import testimonies from "../Assets/comments.json";

function TestimonialSection(props) {
  return (
    <section className="testimonials">
      <div className="full-container">
        <div className="container-testimonials">
          <div className="testimonials-title">
            <h3>{props.h3}</h3>
            <h2>{props.h2}</h2>
            <p>{props.text}</p>
          </div>
          <div className="testimonials-album">
            {testimonies.comments.map((client) => (
              <TestimonialCard
                comment={client.comment}
                img={client.image_url}
                name={client.name}
                city={client.city}
                rate={Array.from({ length: client.rating })}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
