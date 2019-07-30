import React from "react";
import "./Timeline.scss";
import HourSpan from "../TimeSpans/HourSpan/HourSpan";
import { HOURS_IN_DAY_ARRAY } from "../../const/timeConst";

interface TimelineProps {}

const Timeline: React.FC<TimelineProps> = () => {
  return (
    <div className="timeline">
      {HOURS_IN_DAY_ARRAY.map(hour => (
        <HourSpan
          key={hour}
          className="time-line_hour-span"
          hour={hour}
          withoutQuarters
        />
      ))}
    </div>
  );
};

export default Timeline;
