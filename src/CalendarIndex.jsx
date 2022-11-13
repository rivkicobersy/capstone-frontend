import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export function CalendarIndex() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="container">
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}
