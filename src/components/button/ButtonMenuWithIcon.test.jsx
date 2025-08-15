import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi, beforeEach } from "vitest";
import ButtonMenuWithIcon from "./ButtonMenuWithIcon.jsx";

const MockIcon = ({ color, size }) => (
  <svg data-testid="mock-icon" fill={color} width={size} height={size}></svg>
);

describe("ButtonMenuWithIcon", () => {
  const mockOnClick = vi.fn();
  const itemMock = {
    label: "Menu Item",
    icon: MockIcon,
    color: "bg-blue-500",
    onClick: mockOnClick,
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("renders the button with the label", () => {
    render(<ButtonMenuWithIcon item={itemMock} />);
    expect(screen.getByText(/Menu Item/i)).toBeTruthy();
  });

  test("calls onClick when button is clicked", () => {
    render(<ButtonMenuWithIcon item={itemMock} />);
    fireEvent.click(screen.getByText(/Menu Item/i));
    expect(mockOnClick).toHaveBeenCalled();
  });

  test("renders the icon inside the button", () => {
    render(<ButtonMenuWithIcon item={itemMock} />);
    expect(screen.getByTestId("mock-icon")).toBeTruthy();
  });

  test("applies the correct color class", () => {
    render(<ButtonMenuWithIcon item={itemMock} />);
    const button = screen.getByText(/Menu Item/i).closest("button");
    expect(button).toHaveClass("bg-blue-500");
  });
});
