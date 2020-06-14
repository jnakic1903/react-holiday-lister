import React from 'react';
import Holiday from './Holiday/Holiday';

const holidays = (props) => {
  let outputData = null;
  if (props.error) {
    outputData = <p>Something went wrong, try again later</p>;
  } else {
    outputData = props.holidaysData.map((holiday) => {
      return (
        <Holiday
          key={holiday.name + holiday.date}
          name={holiday.name}
          localName={holiday.localName}
          date={holiday.date}
        />
      );
    });
  }
  return <div>{outputData}</div>;
};

export default holidays;
