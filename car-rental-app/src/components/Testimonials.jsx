import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BlackDivider from "./BlackDivider";
import TestimonialBox from "./TestimonialBOX";

function Testimonials() {
  return (
    <div>
      <Header />
      <BlackDivider />
      <div className="testimonials-album">
        <TestimonialBox
          comment='"We rented a car from this website and had an amazing
                  experience! The booking was easy and the rental rates were
                  very affordable. "'
          img="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*kuRZa261wcEzQXpTQhnkqQ.jpeg"
          name="Lance Stroll"
          city="Montreal"
        />
        <TestimonialBox
          comment='"The car was in great condition and made our trip even better.
                  Rental rates were awesome. Highly recommend for this car
                  rental website!"'
          img="https://pbs.twimg.com/media/FgK1YH4XwAIoIob?format=jpg&name=large"
          name="Nicholas Latifi"
          city="Montreal"
        />
      </div>
      <Footer />
    </div>
  );
}

export default Testimonials;
