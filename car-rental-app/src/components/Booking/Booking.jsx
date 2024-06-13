import React, { useEffect, useState } from "react";
import "./booking.css";

function Booking(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const [price, setPrice] = useState({
    childBooster: 0,
    babySeat: 0,
    extraDriver: 0,
    extraMileage: 0,
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setPrice((prvs) => ({ ...prvs, [name]: value }));
    props.prices(price);
  };

  return (
    <section>
      <div className="full-container">
        <div className="container-form">
          <div>
            <h3>Select Date, Location, and Additional Services:</h3>
          </div>
          <h5>Date and Location</h5>
          <form className="form-grid" onChange={handleChange}>
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
            {/* <div className="form-grid-item">
              <label className="label"></label>
              <input className="submit" type="submit" value="Search" />
            </div> */}
          </form>
          <h5>More Services</h5>
          <form className="form-grid" onChange={handleChange}>
            <div className="form-grid-item">
              <label className="label">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#000"
                  className="input-icon"
                >
                  <path d="M720-400v-120H600v-80h120v-120h80v120h120v80H800v120h-80Zm-360-80q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0-80Zm0 400Z" />
                </svg>{" "}
                Add Driver
              </label>
              <select name="extraDriver" id="extraDriver">
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
              </select>
            </div>
            <div className="form-grid-item">
              <label className="label">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="25px"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M32 15H16C16 20 4 27 4 27C4 27 5 30 7.5 35C9.39377 38.7875 11.5745 40.8536 12.5207 41.6329C12.8255 41.8839 13.2107 42 13.6055 42H35.2984C35.7526 42 36.1923 41.8455 36.5149 41.5258C37.3745 40.6737 39.1873 38.6255 41 35C43.5 30 44 27 44 27C44 27 32 21 32 15Z"
                      stroke="#000000"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M32 15L34 6L42 6.00001"
                      stroke="#000000"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M16 15L14 6L6 6.00001"
                      stroke="#000000"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M4 27C4 27 6 31 12 31C18 31 31 31 36 31C41 31 44 27 44 27"
                      stroke="#000000"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>{" "}
                Child Booster
              </label>
              <select name="childBooster" id="ChildBooster">
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
              </select>
            </div>
            <div className="form-grid-item">
              <label className="label">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="matrix(-1, 0, 0, 1, 0, 0)"
                  width="25px"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M36 33L42 4C42 4 31.5 6 31.5 10C31.5 12.5 35.5 14 34 15.5C32.5 17 27 18.5 27 22.5C27 25 28.6406 26.8594 27 28.5C25.5 30 24 29.2143 21.5 28.5C18.7 27.7 13 27 11 27.5C9 28 6.99997 29 7 32C7.00001 33.6492 8 35.5 10.5 36C13 36.5 16 34 20 34C24 34 29 37 32 37C35 37 36 33 36 33Z"
                      fill="#FFF"
                      stroke="#000000"
                      stroke-width="4"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M11 36L8 44H41L35 36"
                      stroke="#000000"
                      stroke-width="4"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
                Baby Seat
              </label>
              <select name="babySeat" id="babySeat">
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
              </select>
            </div>
            <div className="form-grid-item">
              <label className="label">
                <svg
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                  width="25px"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fill="#000000"
                      d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
                    ></path>
                    <path
                      fill="#000000"
                      d="M192 512a320 320 0 1 1 640 0 32 32 0 1 1-64 0 256 256 0 1 0-512 0 32 32 0 0 1-64 0z"
                    ></path>
                    <path
                      fill="#000000"
                      d="M570.432 627.84A96 96 0 1 1 509.568 608l60.992-187.776A32 32 0 1 1 631.424 440l-60.992 187.776zM502.08 734.464a32 32 0 1 0 19.84-60.928 32 32 0 0 0-19.84 60.928z"
                    ></path>
                  </g>
                </svg>{" "}
                Extra Mileage
              </label>
              <select name="extraMileage" id="extraMileage">
                <option value={0}>0</option>
                <option value={100}>100</option>
                <option value={500}>500</option>
                <option value={1000}>1000</option>
                <option value={2000}>2000</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Booking;
