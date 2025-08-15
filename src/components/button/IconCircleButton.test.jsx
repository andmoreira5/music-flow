import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi, beforeEach } from "vitest";
import IconCircleButton from "./IconCircleButton.jsx";

const MockIcon = () => <svg data-testid="mock-icon"></svg>;

describe("IconCircleButton", () => {
  const mockOnClick = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("renders the button with the label", () => {
    render(
      <IconCircleButton label="My Button" onClick={mockOnClick}>
        <MockIcon />
      </IconCircleButton>
    );
    expect(screen.getByText(/My Button/i)).toBeTruthy();
  });

  test("renders the children inside the button", () => {
    render(
      <IconCircleButton label="My Button" onClick={mockOnClick}>
        <MockIcon />
      </IconCircleButton>
    );
    expect(screen.getByTestId("mock-icon")).toBeTruthy();
  });

  test("calls onClick when button is clicked", () => {
    render(
      <IconCircleButton label="My Button" onClick={mockOnClick}>
        <MockIcon />
      </IconCircleButton>
    );
    fireEvent.click(screen.getByText(/My Button/i));
    expect(mockOnClick).toHaveBeenCalled();
  });

  test("applies selected classes when selected is true", () => {
    render(
      <IconCircleButton label="My Button" onClick={mockOnClick} selected={true}>
        <MockIcon />
      </IconCircleButton>
    );
    const button = screen.getByText(/My Button/i).closest("div");
    expect(button).toHaveClass("bg-gray-700 border-gray-700");
    const label = screen.getByText(/My Button/i);
    expect(label).toHaveClass("font-bold text-white text-base text-gray-200");
  });

  test("applies default classes when selected is false", () => {
    render(
      <IconCircleButton
        label="My Button"
        onClick={mockOnClick}
        selected={false}
      >
        <MockIcon />
      </IconCircleButton>
    );
    const button = screen.getByText(/My Button/i).closest("div");
    expect(button).toHaveClass("border-gray-400 bg-gray-500");
    const label = screen.getByText(/My Button/i);
    expect(label).toHaveClass("text-base text-gray-200");
  });
});
