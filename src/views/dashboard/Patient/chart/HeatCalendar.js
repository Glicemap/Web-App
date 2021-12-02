import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../../../../assets/scss/partials/third-party/_calendar.scss';

var moment = require('moment')
const HeatCalendar = ({low, midlow, midhigh, high}) => {
  const [value, onChange] = useState(new Date());
  

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        locale={"pt-BR"}
        tileClassName={({ date, view }) => {
          if(low.find(x=>x===moment(date).format("YYYY-MM-DD"))){
            return 'low'
          } else if(midlow.find(x=>x===moment(date).format("YYYY-MM-DD"))){
            return 'midlow'
          } else if(midhigh.find(x=>x===moment(date).format("YYYY-MM-DD"))){
            return 'midhigh'
          } else if(high.find(x=>x===moment(date).format("YYYY-MM-DD"))){
            return 'high'
          }
        }}
      />
    </div>
  );
}

export default HeatCalendar;