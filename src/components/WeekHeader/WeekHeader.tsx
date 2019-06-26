import React from "react";
import "./WeekHeader.scss";
import { Moment } from "moment";

interface WeekHeaderProps {
  daysOfWeek: Moment[];
}

const WeekHeader: React.FC<WeekHeaderProps> = ({ daysOfWeek }) => {
  return (
    <div className="week-header">
      {daysOfWeek.map(day => (
        <div>
          <h4>{day.format("DD/MM/YYYY")}</h4>
          <h5>{day.format("dddd")}</h5>
        </div>
      ))}
    </div>
  );
};

export default WeekHeader;
