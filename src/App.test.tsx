import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";

test("renders a christmas tree with lights turned on by default", () => {
  render(<App />);
  const xmasTree = screen.getByTestId("xmas-tree");
  expect(xmasTree).toBeInTheDocument();

  const lights = screen.getByTestId("lights");
  expect(lights).toBeInTheDocument();
});

test("button toggles christmas tree lights", () => {
  render(<App />);
  const button = screen.getByTestId("toggle-lights");
  const xmasTree = screen.getByTestId("xmas-tree");
  expect(xmasTree).toBeInTheDocument();

  expect(screen.getByTestId("lights")).toBeInTheDocument();
  fireEvent.click(button);
  expect(() => screen.getByTestId("lights")).toThrow();
});
