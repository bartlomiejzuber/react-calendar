import React, { useCallback } from "react";
import "./QuarterSpan.scss";

interface QuarterSpanProps {
  hour: number;
  minutes: number;
  onClick?: (hour: number, minutes: number) => void;
}

const QuarterSpan: React.FC<QuarterSpanProps> = ({
  hour,
  minutes,
  onClick
}) => {
  const handleOnClick = useCallback(() => onClick && onClick(hour, minutes), [
    hour,
    minutes,
    onClick
  ]);
  return <div className="quarter-span" onClick={handleOnClick} />;
};

export default QuarterSpan;
