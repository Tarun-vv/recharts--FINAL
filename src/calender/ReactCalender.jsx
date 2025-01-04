// npm i react-calendar

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function ReactCalender() {
  const [value, onChange] = useState(new Date());
  console.log(value);

  return (
    <div className="calender">
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}

export default ReactCalender;
