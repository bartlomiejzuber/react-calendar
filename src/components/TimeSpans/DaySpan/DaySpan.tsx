import React from "react";
import { Moment } from "moment";
import "./DaySpan.scss";
import HourSpan from "../HourSpan/HourSpan";
import { HOURS_IN_DAY_ARRAY } from "../../../const/timeConst";

interface DaySpanProps {
  day: Moment;
}

const handleQuarterSpanClick = () => {
  
};
const DaySpan: React.FC<DaySpanProps> = ({ day }) => {
  return (
    <div className="day-span">
      {HOURS_IN_DAY_ARRAY.map(hour => (
        <HourSpan key={hour} hour={hour} onQuarterSpanClick={handleQuarterSpanClick} withBorder/>
      ))}
    </div>
  );
};

export default DaySpan;
