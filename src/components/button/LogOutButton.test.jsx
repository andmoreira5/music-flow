import { render, screen, fireEvent } from "@testing-library/react";
import { useAppContext } from "../../context/ContextProvider";
import LogoutButton from "./LogOut.jsx";
import { vi, describe, test, expect } from "vitest";

vi.mock("react-icons/bi", () => ({
  BiLogOut: () => <div data-testid="logout-icon" />,
}));

vi.mock("../../context/ContextProvider", () => ({
  useAppContext: vi.fn(),
}));

describe("LogoutButton", () => {
  test("renders the button and calls setIsLoggedIn(false) when clicked", () => {
    const setIsLoggedIn = vi.fn();
    useAppContext.mockReturnValue({ setIsLoggedIn });
    render(<LogoutButton />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(screen.getByTestId("logout-icon")).toBeInTheDocument();
    fireEvent.click(button);
    expect(setIsLoggedIn).toHaveBeenCalledWith(false);
  });
});
