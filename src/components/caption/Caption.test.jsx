import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import Caption from "./Caption.jsx";

describe("Caption", () => {
  const mockDescription = "Title Example";
  const mockDetailing = "This is a detail text";

  test("should render description and detailing correctly", () => {
    render(<Caption description={mockDescription} detailing={mockDetailing} />);
    expect(screen.getByText(mockDescription)).toBeInTheDocument();
    expect(screen.getByText(mockDetailing)).toBeInTheDocument();
  });
});
