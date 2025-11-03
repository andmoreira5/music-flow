import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi, beforeEach } from "vitest";
import ConfirmationModal from "./ConfirmationModal.jsx";

const mockSetData = vi.fn();
const mockSetClasses = vi.fn();
const mockSetVisibleConfirmationScreen = vi.fn();

let selectedItemMock = { id: 1, name: "John Doe" };
let visibleConfirmationScreenMock = true;
let tableSelectedMock = "users";

vi.mock("../../context/ContextProvider.jsx", () => ({
  useAppContext: () => ({
    setData: mockSetData,
    setClasses: mockSetClasses,
    visibleConfirmationScreen: visibleConfirmationScreenMock,
    setVisibleConfirmationScreen: mockSetVisibleConfirmationScreen,
    tableSelected: tableSelectedMock,
    selectedItem: selectedItemMock,
  }),
}));

let pathnameMock = "/manageUsers";
vi.mock("react-router-dom", () => ({
  useLocation: () => ({ pathname: pathnameMock }),
}));

describe("ConfirmationModal", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    visibleConfirmationScreenMock = true;
    pathnameMock = "/manageUsers";
  });

  test("renders the modal when visible", () => {
    render(<ConfirmationModal />);
    expect(screen.getByText(/CONFIRM DELETION/i)).toBeTruthy();
    expect(screen.getByText(/OK/i)).toBeTruthy();
    expect(screen.getByText(/Cancel/i)).toBeTruthy();
  });

  test("calls setData and closes modal when OK is clicked (users)", () => {
    render(<ConfirmationModal />);
    fireEvent.click(screen.getByText(/OK/i));

    expect(mockSetData).toHaveBeenCalled();
    expect(mockSetVisibleConfirmationScreen).toHaveBeenCalledWith(false);
  });

  test("closes modal when Cancel is clicked", () => {
    render(<ConfirmationModal />);
    fireEvent.click(screen.getByText(/Cancel/i));
    expect(mockSetVisibleConfirmationScreen).toHaveBeenCalledWith(false);
  });

  test("calls setClasses when on manageClasses path", () => {
    pathnameMock = "/manageClasses";
    render(<ConfirmationModal />);
    fireEvent.click(screen.getByText(/OK/i));

    expect(mockSetClasses).toHaveBeenCalled();
    expect(mockSetVisibleConfirmationScreen).toHaveBeenCalledWith(false);
  });
});
