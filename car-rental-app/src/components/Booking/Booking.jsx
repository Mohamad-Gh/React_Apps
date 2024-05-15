import React from "react";

function Booking() {
  return (
    <section className="booking-form">
      <div className="full-container">
        <div className="container-form">
          <div>
            <h3>Book a car</h3>
          </div>
          <form className="form-grid">
            <div className="form-grid-item">
              <label className="label">
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
                  className="input-icon"
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
            <div className="form-grid-item">
              <label className="label">
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
                  className="input-icon"
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
            <div className="form-grid-item">
              <label className="label">
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
                  className="input-icon"
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
            <div className="form-grid-item">
              <label className="label">
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
                  className="input-icon"
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
              <input className="Date" type="date" />
            </div>
            <div className="form-grid-item">
              <label className="label">
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
                  className="input-icon"
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
              <input className="Date" type="date" />
            </div>
            <div className="form-grid-item">
              <label className="label"></label>
              <input className="submit" type="submit" value="Search" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Booking;
