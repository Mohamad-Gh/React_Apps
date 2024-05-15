import React from "react";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import testimonies from "../../Assets/comments.json";
import UserTestimonial from "../UserTestimonial/UserTestimonial";

function TestimonialSection(props) {
  return (
    <section className="testimonials">
      <div className="full-container">
        <div className="container-testimonials">
          <div className="testimonials-title">
            <h3>
              {props.h3}
              <span>{props.span}</span>
              {props.h3More}
            </h3>
            <h2>{props.h2}</h2>
            <p>{props.text}</p>
          </div>
          <div className="testimonials-album">
            {testimonies.comments.map((client, indx) => (
              <TestimonialCard
                key={indx}
                comment={client.comment}
                img={client.image_url}
                name={client.name}
                city={client.city}
                rate={client.rating}
                // rate={Array.from({ length: client.rating })}
              />
            ))}
            <TestimonialCard
              key={"user"}
              comment={
                "During my visit to Prince George, I rented a car from this company, and I must say, it was a fantastic experience. The car was in great condition, and the service was top-notch."
              }
              img={
                "https://i3.wp.com/www.iprcenter.gov/image-repository/blank-profile-picture.png/@@images/image.png?resize=768%2C768&ssl=1"
              }
              name={"name"}
              city={"city"}
              rate={5}
              // rate={Array.from({ length: client.rating })}
            />
            <UserTestimonial />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
