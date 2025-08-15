import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, test, expect, vi, beforeEach } from "vitest";
import CardClass from "./CardClass.jsx";

const mockSetSelectedItem = vi.fn();
const mockSetVisibleConfirmationScreen = vi.fn();
const mockSetIsEditing = vi.fn();
const mockSetSelectedButtonManageClasses = vi.fn();

vi.mock("../../context/ContextProvider.jsx", () => ({
  useAppContext: () => ({
    setSelectedItem: mockSetSelectedItem,
    setVisibleConfirmationScreen: mockSetVisibleConfirmationScreen,
    setIsEditing: mockSetIsEditing,
    setSelectedButtonManageClasses: mockSetSelectedButtonManageClasses,
  }),
}));

vi.mock("../button/ButtonActionItem.jsx", () => ({
  default: ({ children, onClick }) => (
    <button onClick={onClick} data-testid="mock-button">
      {children}
    </button>
  ),
}));

describe("CardClass", () => {
  const mockItem = {
    course: "Math",
    time: "08:00 - 10:00",
    students: [{ id: 1 }, { id: 2 }],
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("should render course, time and students count", () => {
    render(<CardClass item={mockItem} />);
    expect(screen.getByText("MATH")).toBeInTheDocument();
    expect(screen.getByText("08:00 - 10:00")).toBeInTheDocument();
    expect(screen.getByText("2 ALUNO(S) MATRICULADO(S)")).toBeInTheDocument();
  });

  test("should call edit handler when Edit button is clicked", () => {
    render(<CardClass item={mockItem} />);
    fireEvent.click(screen.getByText(/editar/i));
    expect(mockSetSelectedItem).toHaveBeenCalledWith(mockItem);
    expect(mockSetIsEditing).toHaveBeenCalledWith(true);
    expect(mockSetSelectedButtonManageClasses).toHaveBeenCalledWith(2);
  });

  test("should call delete handler when Delete button is clicked", () => {
    render(<CardClass item={mockItem} />);
    fireEvent.click(screen.getByText(/excluir/i));
    expect(mockSetSelectedItem).toHaveBeenCalledWith(mockItem);
    expect(mockSetVisibleConfirmationScreen).toHaveBeenCalledWith(true);
  });

  test("should not render action buttons if showButtons is false", () => {
    render(<CardClass item={mockItem} showButtons={false} />);
    expect(screen.queryByText(/editar/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/excluir/i)).not.toBeInTheDocument();
  });

  test("should render IconComponent if provided", () => {
    const MockIcon = () => <svg data-testid="mock-icon" />;
    render(<CardClass item={{ ...mockItem, icon: MockIcon }} />);
    expect(screen.getByTestId("mock-icon")).toBeInTheDocument();
  });
});
