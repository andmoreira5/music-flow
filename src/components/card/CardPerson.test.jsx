import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi, beforeEach } from "vitest";
import CardPerson from "./CardPerson.jsx";

const mockSetSelectedItem = vi.fn();
const mockSetVisibleConfirmationScreen = vi.fn();
const mockSetIsEditing = vi.fn();
const mockSetSelectedButtonManageRegistrations = vi.fn();
const mockGetUrlPhoto = vi.fn(() => "http://fakeurl.com/photo.jpg");

vi.mock("../../data/url.js", () => ({
  getUrlPhoto: (...args) => mockGetUrlPhoto(...args),
}));

let tableSelectedMock = "professor";
vi.mock("../../context/ContextProvider.jsx", () => ({
  useAppContext: () => ({
    tableSelected: tableSelectedMock,
    setSelectedItem: mockSetSelectedItem,
    setVisibleConfirmationScreen: mockSetVisibleConfirmationScreen,
    setIsEditing: mockSetIsEditing,
    setSelectedButtonManageRegistrations:
      mockSetSelectedButtonManageRegistrations,
  }),
}));

describe("CardPerson", () => {
  const mockItem = {
    id: 1,
    photo: "photo.jpg",
    name: "John Doe",
    address: "123 Street",
  };

  beforeEach(() => {
    vi.clearAllMocks();
    tableSelectedMock = "professor";
  });

  test("should render name, address and class", () => {
    render(<CardPerson item={mockItem} />);
    expect(screen.getByText("JOHN DOE")).toHaveClass("text-lg");
    expect(screen.getByText("123 Street")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "http://fakeurl.com/photo.jpg"
    );
  });

  test("should call edit handler when Edit button is clicked", () => {
    render(<CardPerson item={mockItem} />);
    fireEvent.click(screen.getByText(/edit/i));

    expect(mockSetSelectedItem).toHaveBeenCalledWith(mockItem);
    expect(mockSetIsEditing).toHaveBeenCalledWith(true);
    expect(mockSetSelectedButtonManageRegistrations).toHaveBeenCalledWith(2);
  });

  test("should call delete handler when Delete button is clicked", () => {
    render(<CardPerson item={mockItem} />);
    fireEvent.click(screen.getByText(/delete/i));

    expect(mockSetSelectedItem).toHaveBeenCalledWith(mockItem);
    expect(mockSetVisibleConfirmationScreen).toHaveBeenCalledWith(true);
  });

  test("should not render delete button if tableSelected is localidade and id is 1", () => {
    tableSelectedMock = "localidade";
    render(<CardPerson item={{ ...mockItem, id: 1 }} />);
    expect(screen.queryByText(/delete/i)).not.toBeInTheDocument();
  });

  test("should render delete icon if showDelete is true", () => {
    render(<CardPerson item={mockItem} showDelete={true} />);
    expect(screen.getAllByRole("img").length).toBeGreaterThan(0);
  });
});
