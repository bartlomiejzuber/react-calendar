import React, { useEffect, useState } from "react";
import moment, { Moment } from "moment";
import "./Calendar.scss";
import DaySpanColumn from "./components/DaySpanColumn/DaySpanColumn";
import { getCurrentWeekDays } from "./utils/date-utils";
import Timeline from "./components/Timeline/Timeline";
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

  console.log(daysOfWeek);

  return (
    <div className="calendar">
      <WeekHeader daysOfWeek={daysOfWeek} />
      <div className="calendar_body">
        <Timeline />
        {daysOfWeek.map(day => (
          <DaySpanColumn key={day.dayOfYear()} day={day} />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
