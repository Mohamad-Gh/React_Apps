import React from "react";
import TestimonialCard from "./TestimonialCard";

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
            <TestimonialCard
              comment='"We rented a car from this website and had an amazing
              experience! The booking was easy and the rental rates were
              very affordable. "'
              img="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*kuRZa261wcEzQXpTQhnkqQ.jpeg"
              name="Lance Stroll"
              city="Montreal"
            />
            <TestimonialCard
              comment='"The car was in great condition and made our trip even better.
              Rental rates were awesome. Highly recommend for this car
              rental website!"'
              img="https://pbs.twimg.com/media/FgK1YH4XwAIoIob?format=jpg&name=large"
              name="Nicholas Latifi"
              city="Montreal"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
