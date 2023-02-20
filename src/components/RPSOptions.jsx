// React
import React, { useState } from "react";
// Context
import { useGlobalContext } from "../context";
// Options
import { rpsOptions } from "../data";

const RPSOptions = () => {
  const { handleRPSOptions } = useGlobalContext();
  const [currentOption, setCurrentOption] = useState("");

  return (
    <section className='rps-options'>
      <h2>Options</h2>
      <form
        className='rps-options-form'
        onSubmit={(e) => handleRPSOptions(currentOption, e)}
      >
        {rpsOptions.map((option) => {
          return (
            <RPSOption
              optionName={option.optionName}
              key={option.id}
              setCurrentOption={setCurrentOption}
            />
          );
        })}
        <button type='submit'>APPLY</button>
      </form>
    </section>
  );
};

const RPSOption = ({ optionName, setCurrentOption }) => {
  return (
    <div className='rps-option'>
      <input
        type='radio'
        value={optionName}
        name='rps-option'
        id={optionName}
        onChange={(e) => setCurrentOption(e.target.value)}
      />
      <label htmlFor={optionName}>{optionName}</label>
    </div>
  );
};

export default RPSOptions;
