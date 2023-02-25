// Create a CarDetails uncontrolled form that uses the HTML Form API to allow the user
// to insert details about a car, such as the model, the year and the color.
// Allow the form to receive a initialData prop that contains the default values of each input,
// and reset the form every time the initialData value changes.

import React, { useState, useRef } from "react";

export function CarDetails({
  initialData = { model: "Opel Run", year: "1999", color: "Grey" },
}) {
  const [model, setModel] = useState(initialData.model);
  const [year, setYear] = useState(initialData.year);
  const [color, setColor] = useState(initialData.color);

  const inputRef = useRef(null);
  const formRef = useRef(null);

  function handleModelChange(event) {
    initialData.model = event.target.value;
    setModel(initialData.model);
  }

  function handleYearChange(event) {
    setYear(event.target.value);
  }

  function handleColorChange(event) {
    setColor(event.target.value);
  }

  function handleFormChange(event) {
    formRef.current.reset();
  }

  return (
    <div>
      <h3> My Car Search Engine</h3>

      <form ref={formRef} onFocus={handleFormChange}>
        <label htmlFor="model">Model:</label>
        <input
          name="model"
          value={model}
          onChange={handleModelChange}
          autoFocus
          ref={inputRef}
        />
        <label htmlFor="model">Year:</label>
        <input
          name="year"
          value={year}
          onChange={handleYearChange}
          ref={inputRef}
        />
        <label htmlFor="model">Color:</label>
        <input
          name="color"
          value={color}
          onChange={handleColorChange}
          ref={inputRef}
        />

        <button type="submit">Search</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
}
