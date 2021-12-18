import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";

test("renders a christmas tree with lights turned on", () => {
  render(<App />);
  const xmasTree = screen.getByTestId("xmas-tree");
  expect(xmasTree).toBeInTheDocument();

  const lights = screen.getByTestId("lights");
  expect(lights).toBeInTheDocument();
});
