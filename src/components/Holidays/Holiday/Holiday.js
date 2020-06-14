import React from 'react';
import './Holiday.css';

const holiday = (props) => {
  const currentYear =
    new Date(props.date).getFullYear() === new Date().getFullYear();
  const currentMonth =
    new Date(props.date).getMonth() === new Date().getMonth();
  const font = currentYear && currentMonth ? 'bold' : 400;
  return (
    <div className={'Holiday'}>
      <h3>
        {props.name}({props.localName})
      </h3>
      <p style={{ fontWeight: font }}>{props.date}</p>
    </div>
  );
};
export default holiday;
