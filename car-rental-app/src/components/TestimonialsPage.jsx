import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BlackDivider from "./BlackDivider";
import TestimonialSection from "./TestimonialSection";

function TestimonialsPage() {
  return (
    <div>
      <Header />
      <TestimonialSection
        h3="Reviewed by Celebrities"
        h2="Client's Testimonials"
        text="Discover the positive impact we've made on the our clients by
              reading through their testimonials. Our clients have experienced
              our service and results, and they're eager to share their positive
              experiences with you."
      />
      <BlackDivider
        text="Book a car by getting in touch with us"
        span="(123) 456-7869"
      />
      <Footer />
    </div>
  );
}

export default TestimonialsPage;
