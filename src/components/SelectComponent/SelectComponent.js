import React from 'react';
import './SelectComponent.css';

const selectComponent = (props) => {
  const data = props.data;
  let outputData = [];
  if (data === new Date().getFullYear()) {
    for (let i = data - 50; i <= data + 50; i++) {
      outputData.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
  } else {
    outputData = data.map((item) => {
      return (
        <option key={item.split('-')[1]} value={item.split('-')[1].trim()}>
          {item}
        </option>
      );
    });
  }

  return (
    <select
      className={`SelectComponent ${props.altClass}`}
      onChange={props.changed}
      defaultValue={props.defaultValue}
    >
      <option></option>
      {outputData}
    </select>
  );
};

export default selectComponent;
