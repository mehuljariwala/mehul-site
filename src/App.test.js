import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

let wrapped = shallow(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
describe("Title", () => {
  it("should render the Title Component correctly", () => {
    expect(wrapped).toMatchSnapshot();
  });
});
