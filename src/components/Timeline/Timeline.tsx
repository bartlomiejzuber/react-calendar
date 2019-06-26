import React from "react";
import "./Timeline.scss";
import HourSpan from "../TimeSpans/HourSpan/HourSpan";
import { HOURS_IN_DAY } from "../../const/timeConst";

interface TimelineProps {
  
}

const hoursArray = Array.from(Array(HOURS_IN_DAY), (x, index) => index + 1);
const Timeline: React.FC<TimelineProps> = () => {
  return (
    <div className="timeline">
      {hoursArray.map(hour => (
        <HourSpan key={hour} className="time-line_hour-span" hour={hour} withoutQuarters/>
      ))}
    </div>
  );
};

export default Timeline;
