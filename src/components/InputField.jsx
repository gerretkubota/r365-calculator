import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({ result, userInput, handleUserInput, handleAdd }) => (
  <div className="input-field-container">
    <div className="result">{`The result is: ${result}`}</div>
    <input type="text" onChange={handleUserInput} value={userInput} />
    <button type="button" onClick={handleAdd}>
      ADD
    </button>
  </div>
);

InputField.propTypes = {
  result: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  userInput: PropTypes.string,
  handleUserInput: PropTypes.func,
  handleAdd: PropTypes.func,
};

export default InputField;
