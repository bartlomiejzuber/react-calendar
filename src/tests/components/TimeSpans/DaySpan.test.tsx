import React from "react";
import moment from "moment";
import { shallow } from "enzyme";
import { DaySpan } from "../../../components/TimeSpans";

it("renders without crashing", () => {
  shallow(<DaySpan day={moment()} />);
});