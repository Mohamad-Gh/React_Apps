import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Faq() {
  const [activeId, setActive] = useState("1");

  function handleClick(id) {
    setActive(id);
  }

  return (
    <section className="faq">
      <div className="container-faq">
        <div className="faq-title">
          <h3>FAQ</h3>
          <h2>Frequently Asked Questions</h2>
          <p>
            Frequently Asked Questions About the Car Rental Booking Process on
            Our Website: Answers to Common Concerns and Inquiries.
          </p>
        </div>
        <div className="faq-qeustions-container">
          <div
            onClick={() => {
              handleClick("1");
            }}
            className="QA-box"
          >
            <div
              id="1"
              className={`questions ${activeId === "1" && "selected"}`}
            >
              <div>What is special about comparing rental car deals?</div>
              <KeyboardArrowDownIcon />
            </div>
            <p className={`responses ${activeId === "1" && "selected"}`}>
              Comparing rental car deals is important as it helps find the best
              deal that fits your budget and requirements, ensuring you get the
              most value for your money. By comparing various options, you can
              find deals that offer lower prices, additional services, or better
              car models. You can find car rental deals by researching online
              and comparing prices from different rental companies.
            </p>
          </div>
          <div
            onClick={() => {
              handleClick("2");
            }}
            className="QA-box"
          >
            <div className={`questions ${activeId === "2" && "selected"}`}>
              <div id="2">How do I find the car rental deals?</div>
              <KeyboardArrowDownIcon />{" "}
            </div>
            <p className={`responses ${activeId === "2" && "selected"}`}>
              You can find car rental deals by researching online and comparing
              prices from different rental companies. Websites such as Expedia,
              Kayak, and Travelocity allow you to compare prices and view
              available rental options. It is also recommended to sign up for
              email newsletters and follow rental car companies on social media
              to be informed of any special deals or promotions.
            </p>
          </div>
          <div
            onClick={() => {
              handleClick("3");
            }}
            className="QA-box"
          >
            <div className={`questions ${activeId === "3" && "selected"}`}>
              <div id="3">How do I find such low rental car prices?</div>
              <KeyboardArrowDownIcon />{" "}
            </div>
            <p className={`responses ${activeId === "3" && "selected"}`}>
              Book in advance: Booking your rental car ahead of time can often
              result in lower prices. Compare prices from multiple companies:
              Use websites like Kayak, Expedia, or Travelocity to compare prices
              from multiple rental car companies. Look for discount codes and
              coupons: Search for discount codes and coupons that you can use to
              lower the rental price. Renting from an off-airport location can
              sometimes result in lower prices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
