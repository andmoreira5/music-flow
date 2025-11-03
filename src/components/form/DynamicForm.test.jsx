import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi, beforeEach } from "vitest";
import DynamicForm from "./DynamicForm.jsx";

const mockSetData = vi.fn();
const mockSetIsEditing = vi.fn();
const mockSetSelectedButtonManageRegistrations = vi.fn();

vi.mock("../../context/ContextProvider.jsx", () => ({
  useAppContext: () => ({
    columns: {
      users: [
        { field: "name", name: "Name", required: true },
        { field: "contact", name: "Contact", required: true, type: "text" },
      ],
    },
    tableSelected: "users",
    data: { users: [] },
    setData: mockSetData,
    isEditing: false,
    setIsEditing: mockSetIsEditing,
    selectedItem: null,
    setSelectedButtonManageRegistrations:
      mockSetSelectedButtonManageRegistrations,
  }),
}));

vi.mock("../../utils/validateContact.js", () => ({
  validateContact: vi.fn(() => true),
}));

describe("DynamicForm", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("renders all fields from columns", () => {
    render(<DynamicForm />);
    expect(screen.getByLabelText(/Name/i)).toBeTruthy();
    expect(screen.getByLabelText(/Contact/i)).toBeTruthy();
  });

  test("updates input values on change", () => {
    render(<DynamicForm />);
    const nameInput = screen.getByLabelText(/Name/i);
    fireEvent.change(nameInput, { target: { value: "John" } });
    expect(nameInput.value).toBe("JOHN");

    const contactInput = screen.getByLabelText(/Contact/i);
    fireEvent.change(contactInput, { target: { value: "12345678" } });
    expect(contactInput.value).toBeTruthy();
  });

  test("calls setData on submit", () => {
    render(<DynamicForm />);
    fireEvent.change(screen.getByLabelText(/Name/i), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText(/Contact/i), {
      target: { value: "12345678" },
    });

    const form = screen.getByTestId("DynamicForm");
    fireEvent.submit(form);

    expect(mockSetData).toHaveBeenCalled();
    expect(mockSetSelectedButtonManageRegistrations).toHaveBeenCalledWith(1);
    expect(mockSetIsEditing).toHaveBeenCalledWith(false);
  });
});
