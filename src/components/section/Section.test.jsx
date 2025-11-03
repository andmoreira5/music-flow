import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi, beforeEach } from "vitest";
import Section from "./Section.jsx";

describe("Section", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("renders title and children", () => {
    render(
      <Section title="My Section">
        <div>Child 1</div>
        <div>Child 2</div>
      </Section>
    );

    expect(screen.getByText(/My Section/i)).toBeTruthy();
    expect(screen.getByText(/Child 1/i)).toBeTruthy();
    expect(screen.getByText(/Child 2/i)).toBeTruthy();
  });
});
