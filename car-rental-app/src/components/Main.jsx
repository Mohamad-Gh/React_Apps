import carHeroImage from "../Assets/images/Audi-front-page.png";
import backGroundDesign from "../Assets/images/background_desing.png";
import carCard from "../Assets/images/car-card.png";
import personCard from "../Assets/images/person-card.png";
import travelCard from "../Assets/images/travel-card.png";
import hyundai from "../Assets/images/Hyundai.png";
import googlePlay from "../Assets/images/google_play.png";
import appStore from "../Assets/images/App_store.png";

function Main() {
  return (
    <main>
      <section class="first">
        <div class="full-container">
          <div class="container">
            <div class="content-card">
              <div class="content">
                <h2>Plan your trip now</h2>
                <h1>
                  Save <span>big</span> with our car rental
                </h1>
                <p>
                  Rent the car of your dreams. Unbeatable prices, unlimited
                  miles, flexible pick-up options and much more.
                </p>
                <div class="buttons">
                  <button class="btn btn-book">
                    Book Ride &nbsp;
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="tabler-icon tabler-icon-circle-check"
                    >
                      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                      <path d="M9 12l2 2l4 -4"></path>
                    </svg>
                  </button>
                  <button class="btn btn-dark">
                    Learn More &nbsp;
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="tabler-icon tabler-icon-chevron-right"
                    >
                      <path d="M9 6l6 6l-6 6"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <img
                class="content-img"
                src={carHeroImage}
                alt="background for hero section"
              />
            </div>
          </div>
        </div>
        <img class="back-img" src={backGroundDesign} />
      </section>
      <section class="booking-form">
        <div class="full-container">
          <div class="container-form">
            <div>
              <h3>Book a car</h3>
            </div>
            <form class="form-grid">
              <div class="form-grid-item">
                <label class="label">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="input-icon"
                  >
                    <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                    <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                    <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5"></path>
                  </svg>
                  Select Your Car Type
                  <span>*</span>
                </label>
                <select>
                  <option>Select your car type</option>
                  <option>Hyundai Ioniq 6</option>
                  <option>Chevrolet Corvette Z06</option>
                  <option>Kia EV6</option>
                  <option>Audi A6</option>
                  <option>Audi A6 Allroad</option>
                  <option>BMW M4 CSL</option>
                </select>
              </div>
              <div class="form-grid-item">
                <label class="label">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="input-icon"
                  >
                    <path
                      d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                      fill="currentColor"
                      stroke-width="0"
                    ></path>
                  </svg>
                  Pick-Up
                  <span>*</span>
                </label>
                <select>
                  <option>Select pick up location</option>
                  <option>Vancouver</option>
                  <option>Victoria</option>
                  <option>Kelowna</option>
                  <option>Kamloops</option>
                  <option>Prince George</option>
                  <option>Nanaimo</option>
                </select>
              </div>
              <div class="form-grid-item">
                <label class="label">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="input-icon"
                  >
                    <path
                      d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                      fill="currentColor"
                      stroke-width="0"
                    ></path>
                  </svg>
                  Drop-off
                  <span>*</span>
                </label>
                <select>
                  <option>Select drop off location</option>
                  <option>Vancouver</option>
                  <option>Victoria</option>
                  <option>Kelowna</option>
                  <option>Kamloops</option>
                  <option>Prince George</option>
                  <option>Nanaimo</option>
                </select>
              </div>
              <div class="form-grid-item">
                <label class="label">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="input-icon"
                  >
                    <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                    <path d="M16 3l0 4"></path>
                    <path d="M8 3l0 4"></path>
                    <path d="M4 11l16 0"></path>
                    <path d="M8 15h2v2h-2z"></path>
                  </svg>
                  Pick-Up Date
                  <span>*</span>
                </label>
                <input class="Date" type="date" />
              </div>
              <div class="form-grid-item">
                <label class="label">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="input-icon"
                  >
                    <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                    <path d="M16 3l0 4"></path>
                    <path d="M8 3l0 4"></path>
                    <path d="M4 11l16 0"></path>
                    <path d="M8 15h2v2h-2z"></path>
                  </svg>
                  Drop-off Date
                  <span>*</span>
                </label>
                <input class="Date" type="date" />
              </div>
              <div class="form-grid-item">
                <label></label>
                <input class="submit" type="submit" value="Search" />
              </div>
            </form>
          </div>
        </div>
      </section>
      <section class="hero-section">
        <div class="full-container">
          <div class="container">
            <div class="title-header">
              <h3>Plan your trip now</h3>
              <h2>Quick & easy car rental</h2>
            </div>
            <div class="card-container">
              <div class="card">
                <img src={carCard} />
                <h3>Select Car</h3>
                <p>
                  We offers a big range of vehicles for all your driving needs.
                  We have the perfect car to meet your needs
                </p>
              </div>
              <div class="card">
                <img src={personCard} />
                <h3>Contact Operator</h3>
                <p>
                  Our knowledgeable and friendly operators are always ready to
                  help with any questions or concerns
                </p>
              </div>
              <div class="card">
                <img src={travelCard} />
                <h3>Let's Drive</h3>
                <p>
                  Whether you're hitting the open road, we've got you covered
                  with our wide range of cars
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="car-album">
        <div class="full-container">
          <div class="container-album">
            <div class="title-header">
              <h3>Vehicle Models</h3>
              <h2>Our rental fleet</h2>
              <p>
                Choose from a variety of our amazing vehicles to rent for your
                next adventure or business trip
              </p>
            </div>
            <div class="album">
              <div class="cars">
                <div id="Hyundai" class="selected">
                  Hyundai Ioniq 6
                </div>
                <div id="chevrolet">Chevrolet Corvette Z06</div>
                <div id="Kia">Kia EV6</div>
                <div id="Audi_A6">Audi A6</div>
                <div id="Audi_All">Audi A6 Allroad</div>
                <div id="BMW">BMW M4 CSL</div>
              </div>
              <div class="car-img">
                <img src={hyundai} />
              </div>
              <div class="car-details">
                <div class="car-details-header">
                  <span id="price" class="car-price">
                    45 ${" "}
                  </span>
                  / rent per day
                </div>
                <div class="details-table">
                  <div>
                    <span>Model</span>
                    <span>|</span>
                    <span id="model">Audi</span>
                  </div>
                  <div>
                    <span>Mark</span>
                    <span>|</span>
                    <span id="mark">A1</span>
                  </div>
                  <div>
                    <span>Year</span>
                    <span>|</span>
                    <span id="year">2012</span>
                  </div>
                  <div>
                    <span>Doors</span>
                    <span>|</span>
                    <span id="doors">4/5</span>
                  </div>
                  <div>
                    <span>AC</span>
                    <span>|</span>
                    <span id="ac">yes</span>
                  </div>
                  <div>
                    <span>Transmission</span>
                    <span>|</span>
                    <span>Automatic</span>
                  </div>
                  <div>
                    <span>Fuel</span>
                    <span>|</span>
                    <span>Gasoline</span>
                  </div>
                </div>
                <div>
                  <a>
                    <button class="reserve-btn">Reserve NOW</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="divider">
        <div class="title-divider">
          <h2>Save big with our cheap car rental!</h2>
          <h3>
            Top Airports. Local Suppliers. <span>24/7</span> Support.
          </h3>
        </div>
      </section>
      <section class="testimonials">
        <div class="full-container">
          <div class="container-testimonials">
            <div class="testimonials-title">
              <h3>Reviewed by Celebrities</h3>
              <h2>Client's Testimonials</h2>
              <p>
                Discover the positive impact we've made on the our clients by
                reading through their testimonials. Our clients have experienced
                our service and results, and they're eager to share their
                positive experiences with you.
              </p>
            </div>
            <div class="testimonials-album">
              <div class="testimonials-box">
                <p>
                  "We rented a car from this website and had an amazing
                  experience! The booking was easy and the rental rates were
                  very affordable. "
                </p>
                <div class="testimonials-person">
                  <img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*kuRZa261wcEzQXpTQhnkqQ.jpeg" />
                  <div>
                    <h3>Lance Stroll</h3>
                    <p>Montreal</p>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="tabler-icon tabler-icon-quote"
                    >
                      <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                      <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="testimonials-box">
                <p>
                  "The car was in great condition and made our trip even better.
                  Rental rates were awesome. Highly recommend for this car
                  rental website!"
                </p>
                <div class="testimonials-person">
                  <img src="https://pbs.twimg.com/media/FgK1YH4XwAIoIob?format=jpg&name=large" />
                  <div>
                    <h3>Nicholas Latifi</h3>
                    <p>Montreal</p>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="tabler-icon tabler-icon-quote"
                    >
                      <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                      <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="faq">
        <div class="container-faq">
          <div class="faq-title">
            <h3>FAQ</h3>
            <h2>Frequently Asked Questions</h2>
            <p>
              Frequently Asked Questions About the Car Rental Booking Process on
              Our Website: Answers to Common Concerns and Inquiries.
            </p>
          </div>
          <div class="faq-qeustions-container">
            <div class="QA-box">
              <div class="questions selected">
                <div>What is special about comparing rental car deals?</div>
                <i class="fa-solid fa-chevron-down"></i>
              </div>
              <p class="responses selected">
                Comparing rental car deals is important as it helps find the
                best deal that fits your budget and requirements, ensuring you
                get the most value for your money. By comparing various options,
                you can find deals that offer lower prices, additional services,
                or better car models. You can find car rental deals by
                researching online and comparing prices from different rental
                companies.
              </p>
            </div>
            <div class="QA-box">
              <div class="questions">
                <div>How do I find the car rental deals?</div>
                <i class="fa-solid fa-chevron-down"></i>
              </div>
              <p class="responses">
                You can find car rental deals by researching online and
                comparing prices from different rental companies. Websites such
                as Expedia, Kayak, and Travelocity allow you to compare prices
                and view available rental options. It is also recommended to
                sign up for email newsletters and follow rental car companies on
                social media to be informed of any special deals or promotions.
              </p>
            </div>
            <div class="QA-box">
              <div class="questions">
                <div>How do I find such low rental car prices?</div>
                <i class="fa-solid fa-chevron-down"></i>
              </div>
              <p class="responses">
                Book in advance: Booking your rental car ahead of time can often
                result in lower prices. Compare prices from multiple companies:
                Use websites like Kayak, Expedia, or Travelocity to compare
                prices from multiple rental car companies. Look for discount
                codes and coupons: Search for discount codes and coupons that
                you can use to lower the rental price. Renting from an
                off-airport location can sometimes result in lower prices.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="app">
        <div class="app-container">
          <h2>Download our app to get most out of it</h2>
          <p>
            Thrown shy denote ten ladies though ask saw. Or by to he going think
            order event music. Incommode so intention defective at convinced.
            Led income months itself and houses you.
          </p>
          <div class="app-box">
            <a href="">
              <img src={googlePlay} />
            </a>
            <a href="">
              <img src={appStore} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Main;
