import "./controlPanel.css";

function ControlPanel() {
  return (
    <div className="container-control">
      <h2 className="title-control">Control Panel</h2>
      <fieldset>
        <label htmlFor="sortPrice">
          Price{" "}
          <select id="sortPrice" name="sortPrice">
            <option value="ascending" selected>
              Ascending
            </option>
            <option value="descending">Descending</option>
          </select>
        </label>

        <label htmlFor="luggageCapacity">
          Luggage Capacity{" "}
          <select id="luggageCapacity" name="luggageCapacity">
            <option value="2">2&gt;</option>
            <option value="3">3&gt;</option>
            <option value="4">4&gt;</option>
          </select>
        </label>

        <label htmlFor="passengerCapacity">
          Passenger Capacity{" "}
          <select id="passengerCapacity" name="passengerCapacity">
            <option value="2">2&gt;</option>
            <option value="3">3&gt;</option>
            <option value="4">4&gt;</option>
          </select>
        </label>

        <label htmlFor="fuelEfficiency">
          Fuel Efficiency{" "}
          <select id="fuelEfficiency" name="fuelEfficiency">
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
