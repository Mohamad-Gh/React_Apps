import { useState } from "react";
import "./controlPanel.css";

function ControlPanel(props) {
  const [queryValue, setQueryValue] = useState(null);

  return (
    <div className="container-control">
      <h2 className="title-control">Find Your Car</h2>
      <label className="search" htmlFor="Search Your Car">
        {" "}
        Search Your Car:{" "}
        <input
          name="title"
          onChange={(event) => {
            // seting input value for the input
            setQueryValue(event.target.value);
            // returing the query value to the parent to be used as filter
            return props.query(event);
          }}
          value={queryValue}
          placeholder="Search Your Car"
        />
      </label>
      <fieldset>
        <label htmlFor="sortPrice">
          Price{" "}
          <select
            id="sortPrice"
            name="sortPrice"
            onChange={(event) => props.price(event)}
          >
            <option value="none" selected>
              Select
            </option>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </label>

        <label htmlFor="luggageCapacity">
          Luggage Capacity{" "}
          <select
            id="luggageCapacity"
            name="luggageCapacity"
            onChange={(event) => props.luggage(event)}
          >
            <option value="2">2&gt;</option>
            <option value="3">3&gt;</option>
          </select>
        </label>

        <label htmlFor="passengerCapacity">
          Passenger Capacity{" "}
          <select
            id="passengerCapacity"
            name="passengerCapacity"
            onChange={(event) => props.passenger(event)}
          >
            <option value="2">2&gt;</option>
            <option value="3">3&gt;</option>
            <option value="4">4&gt;</option>
            <option value="5">5&gt;</option>
          </select>
        </label>

        <label htmlFor="fuelEfficiency">
          Fuel Efficiency in City{" "}
          <select
            id="fuelEfficiency"
            name="fuelEfficiency"
            onChange={(event) => props.fuel(event)}
          >
            <option value="none" selected>
              Select
            </option>
            <option value="ascending" selected>
              Ascending
            </option>
            <option value="descending">Descending</option>
          </select>
        </label>
      </fieldset>
    </div>
  );
}

export default ControlPanel;
