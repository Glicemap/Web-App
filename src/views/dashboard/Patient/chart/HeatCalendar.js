import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../../../../assets/scss/partials/third-party/_calendar.scss';

var moment = require('moment')
const HeatCalendar = () => {
  const [value, onChange] = useState(new Date());
  const low = ['05-10-2021', '11-10-2021', '23-10-2021'];
  const midlow = ['01-10-2021', '09-10-2021', '10-10-2021', '24-10-2021'];
  const midhigh = ['04-10-2021', '12-10-2021', '13-10-2021', '15-10-2021', '18-10-2021', '26-10-2021'];
  const high = ['03-10-2021', '17-10-2021', '25-10-2021'];

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        locale={"pt-BR"}
        tileClassName={({ date, view }) => {
          if(low.find(x=>x===moment(date).format("DD-MM-YYYY"))){
            return 'low'
          } else if(midlow.find(x=>x===moment(date).format("DD-MM-YYYY"))){
            return 'midlow'
          } else if(midhigh.find(x=>x===moment(date).format("DD-MM-YYYY"))){
            return 'midhigh'
          } else if(high.find(x=>x===moment(date).format("DD-MM-YYYY"))){
            return 'high'
          }
        }}
      />
    </div>
  );
}

export default HeatCalendar;