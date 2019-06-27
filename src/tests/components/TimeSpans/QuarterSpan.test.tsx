import React from "react";
import { shallow, mount } from "enzyme";
import sinon from "sinon";
import { expect } from "chai";
import { QuarterSpan } from "../../../components/TimeSpans";

describe("QuarterSpan", () => {
  it("renders without crashing", () => {
    shallow(<QuarterSpan hour={1} minutes={0} />);
  });

  it("should have only one div inside", () => {
    const wrapper = shallow(<QuarterSpan hour={1} minutes={0} />);
    expect(wrapper.find("div")).to.have.lengthOf(1);
  });

  it("should have proper class applied", () => {
    const wrapper = shallow(<QuarterSpan hour={1} minutes={0} />).find("div");
    expect(wrapper.hasClass("quarter-span")).to.be.true;
  });

  it("should call onClick handler exactly once", () => {
    const dummyOnClick = sinon.fake();
    const wrapper = shallow(
      <QuarterSpan hour={1} minutes={0} onClick={dummyOnClick} />
    );
    wrapper.find("div").simulate("click");

    expect(dummyOnClick.callCount).to.be.equal(1);
  });

  it("should call onClick handler", () => {
    const dummyOnClick = sinon.fake();
    const wrapper = shallow(
      <QuarterSpan hour={1} minutes={0} onClick={dummyOnClick} />
    );
    wrapper.find("div").simulate("click");

    expect(dummyOnClick.called).to.be.equal(true);
  });

  it("should call onClick handler with proper hour and minute", () => {
    const dummyOnClick = sinon.fake();
    const wrapper = shallow(
      <QuarterSpan hour={1} minutes={0} onClick={dummyOnClick} />
    );
    wrapper.find("div").simulate("click");

    expect(dummyOnClick.calledWith(1, 0)).to.be.equal(true);
  });
});
