import React from "react";
import "./HourSpan.scss";
import QuarterSpan from "../QuarterSpan/QuarterSpan";

interface HourSpanProps {
  hour: number;
  onQuarterSpanClick?: (hour: number, minutes: number) => void;
  withoutQuarters?: boolean;
  withBorder?: boolean;
  className?: string;
}

const HourSpan: React.FC<HourSpanProps> = ({
  hour,
  withoutQuarters,
  onQuarterSpanClick,
  withBorder,
  className
}) => {
  return (
    <div
      className={`hour-span ${className ? className : ""} ${
        withBorder ? "withBorder" : ""
      }`}
    >
      {!withoutQuarters && (
        <>
          <QuarterSpan hour={hour} minutes={0} onClick={onQuarterSpanClick} />
          <QuarterSpan hour={hour} minutes={15} onClick={onQuarterSpanClick} />
          <QuarterSpan hour={hour} minutes={30} onClick={onQuarterSpanClick} />
          <QuarterSpan hour={hour} minutes={45} onClick={onQuarterSpanClick} />
        </>
      )}
    </div>
  );
};

export default HourSpan;
