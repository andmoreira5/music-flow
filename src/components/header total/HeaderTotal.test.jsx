import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi, beforeEach } from "vitest";
import HeaderTotal from "./HeaderTotal.jsx";

const mockSetSelectedItem = vi.fn();
const mockSetSelected = vi.fn();

let arrayMock = [{ id: 1 }, { id: 2 }];
let selectedMock = 1;
let subtitleMock = "Students";

vi.mock("../../context/ContextProvider.jsx", () => ({
  useAppContext: () => ({
    setSelectedItem: mockSetSelectedItem,
  }),
}));

vi.mock("../button/IconCircleButton.jsx", () => ({
  default: ({ selected, label, onClick, children }) => (
    <button onClick={onClick}>
      {label}
      {children}
      {selected ? "selected" : ""}
    </button>
  ),
}));

vi.mock("../card/Total.jsx", () => ({
  default: ({ quantity, subtitle }) => (
    <div>
      {quantity} - {subtitle}
    </div>
  ),
}));

describe("HeaderTotal", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    arrayMock = [{ id: 1 }, { id: 2 }];
    selectedMock = 1;
    subtitleMock = "Students";
  });

  test("renders total and buttons", () => {
    render(
      <HeaderTotal
        array={arrayMock}
        selected={selectedMock}
        setSelected={mockSetSelected}
        subtitle={subtitleMock}
      />
    );

    expect(screen.getByText(/2 - Students/i)).toBeTruthy();
    expect(screen.getByText(/List/i)).toBeTruthy();
    expect(screen.getByText(/Add/i)).toBeTruthy();
  });

  test("calls setSelected when Lista button is clicked", () => {
    render(
      <HeaderTotal
        array={arrayMock}
        selected={selectedMock}
        setSelected={mockSetSelected}
        subtitle={subtitleMock}
      />
    );

    fireEvent.click(screen.getByText(/List/i));
    expect(mockSetSelected).toHaveBeenCalledWith(1);
  });

  test("calls setSelectedItem and setSelected when Adicionar button is clicked", () => {
    render(
      <HeaderTotal
        array={arrayMock}
        selected={selectedMock}
        setSelected={mockSetSelected}
        subtitle={subtitleMock}
      />
    );

    fireEvent.click(screen.getByText(/Add/i));
    expect(mockSetSelectedItem).toHaveBeenCalledWith(null);
    expect(mockSetSelected).toHaveBeenCalledWith(2);
  });
});
