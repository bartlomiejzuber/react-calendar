import React, { useEffect, useState } from "react";
import moment, { Moment } from "moment";
import "./Calendar.scss";
import { getCurrentWeekDays } from "./utils/date-utils";
import Timeline from "./components/Timeline/Timeline";
import { DaySpan } from "./components/TimeSpans";
import WeekHeader from "./components/WeekHeader/WeekHeader";

interface CalendarProps {
  locale: string;
}

const Calendar: React.FC<CalendarProps> = ({ locale }) => {
  const [baseMoment, setBaseMoment] = useState(moment());
  const [daysOfWeek, setDaysOfWeek] = useState<Moment[]>([] as any);
  useEffect(() => {
    baseMoment.locale(locale);
    setDaysOfWeek(getCurrentWeekDays());
  }, [baseMoment, locale]);

  return (
    <div className="calendar">
      <WeekHeader daysOfWeek={daysOfWeek} />
      <div className="calendar_body">
        <Timeline />
        {daysOfWeek.map(day => (
          <DaySpan key={day.dayOfYear()} day={day} />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
