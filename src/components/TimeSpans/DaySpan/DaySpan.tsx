import React from "react";
import { Moment } from "moment";
import "./DaySpan.scss";
import HourSpan from "../HourSpan/HourSpan";
import { HOURS_IN_DAY_ARRAY } from "../../../const/timeConst";

interface DaySpanProps {
  day: Moment;
}

const handleQuarterSpanClick = () => {};
const DaySpan: React.FC<DaySpanProps> = ({ day }) => {
  return (
    <div className="day-span-column">
      {HOURS_IN_DAY_ARRAY.map(hour => (
        <HourSpan hour={hour} onQuarterSpanClick={handleQuarterSpanClick} />
      ))}
    </div>
  );
};

export default DaySpan;
