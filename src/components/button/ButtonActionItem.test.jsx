import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi, beforeEach } from "vitest";
import ButtonActionItem from "./ButtonActionItem.jsx";

describe("ButtonActionItem", () => {
  const mockOnClick = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("renders the button with children text", () => {
    render(
      <ButtonActionItem onClick={mockOnClick} color="bg-blue-500">
        Click Me
      </ButtonActionItem>
    );
    expect(screen.getByText(/Click Me/i)).toBeTruthy();
  });

  test("calls onClick when button is clicked", () => {
    render(
      <ButtonActionItem onClick={mockOnClick} color="bg-blue-500">
        Click Me
      </ButtonActionItem>
    );
    fireEvent.click(screen.getByText(/Click Me/i));
    expect(mockOnClick).toHaveBeenCalled();
  });

  test("applies the correct color class", () => {
    render(
      <ButtonActionItem onClick={mockOnClick} color="bg-red-500">
        Click Me
      </ButtonActionItem>
    );
    const button = screen.getByText(/Click Me/i);
    expect(button).toHaveClass("bg-red-500");
  });
});
