import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const myEventsList = [
  {
    title: "Team Meeting",
    allDay: false,
    start: new Date(2025, 0, 5, 10, 0), // January 5, 2025, 10:00 AM
    end: new Date(2025, 0, 5, 11, 0), // January 5, 2025, 11:00 AM
  },
  {
    title: "Conference",
    allDay: true,
    start: new Date(2025, 0, 10), // January 10, 2025, all-day
    end: new Date(2025, 0, 10), // January 10, 2025, all-day
  },
  {
    title: "Project Deadline",
    allDay: false,
    start: new Date(2025, 0, 15, 16, 0), // January 15, 2025, 4:00 PM
    end: new Date(2025, 0, 15, 17, 30), // January 15, 2025, 5:30 PM
  },
  {
    title: "Holiday Party",
    allDay: true,
    start: new Date(2025, 0, 20), // January 20, 2025, all-day
    end: new Date(2025, 0, 20), // January 20, 2025, all-day
  },
];

const ReactSchedule = () => (
  <div>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      // views={["work_week", "day"]}
      // view="work_week"
      style={{ height: 500 }}
    />
  </div>
);

export default ReactSchedule;
