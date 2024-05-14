import "./controlPanel.css";

function ControlPanel(props) {
  return (
    <div className="container-control">
      <h2 className="title-control">Control Panel</h2>
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
            onChange={(event) => props.feul(event)}
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
