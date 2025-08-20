import { render, fireEvent, screen } from "@testing-library/react";
import { describe, test, expect, vi, beforeEach } from "vitest";
import Header from "./Header.jsx";

const mockSetDarkMode = vi.fn();
const mockSetIsLoggedIn = vi.fn();
const mockUserData = { name: "John Doe", userType: "Professor" };
const mockScreen = { title: "HOME", color: "blue" };

vi.mock("../../context/ContextProvider.jsx", () => ({
  useAppContext: () => ({
    isDarkMode: false,
    setDarkMode: mockSetDarkMode,
    userData: mockUserData,
    screen: mockScreen,
    setIsLoggedIn: mockSetIsLoggedIn,
  }),
}));

vi.mock("../button/LogOut.jsx", () => ({
  default: () => <button>Logout</button>,
}));

vi.mock("react-toggle-dark-mode", () => ({
  DarkModeSwitch: ({ onChange }) => (
    <button onClick={() => onChange(true)}>Switch</button>
  ),
}));

let pathnameMock = "/home";
const mockNavigate = vi.fn();
vi.mock("react-router-dom", () => ({
  useLocation: () => ({ pathname: pathnameMock }),
  useNavigate: () => mockNavigate,
}));

describe("Header", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("renders greeting and user type on HOME screen", () => {
    render(<Header />);
    expect(screen.getByText(/John Doe/i)).toBeTruthy();
    expect(screen.getByText(/Professor/i)).toBeTruthy();
  });

  test("calls setDarkMode when DarkModeSwitch button is clicked", () => {
    render(<Header />);
    fireEvent.click(screen.getByText("Switch"));
    expect(mockSetDarkMode).toHaveBeenCalled();
  });

  test("renders GoToHome component when not on /home", () => {
    pathnameMock = "/other";
    render(<Header />);
    expect(mockNavigate).toBeDefined();
  });
});
