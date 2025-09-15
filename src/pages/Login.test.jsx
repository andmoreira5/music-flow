import { render, fireEvent, act } from "@testing-library/react";
import { describe, vi, expect, test, beforeEach } from "vitest";
import Login from "./Login.jsx";
import { dataLogin } from "../data/login.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

describe("Login", () => {
  let inputEmail, inputPassword, button, mockNavigate;

  beforeEach(() => {
    vi.clearAllMocks();
    vi.useFakeTimers();
    mockNavigate = vi.fn();
    useNavigate.mockReturnValue(mockNavigate);

    const { getByTestId } = render(<Login />);
    inputEmail = getByTestId("inputEmailLogin");
    inputPassword = getByTestId("inputPasswordLogin");
    button = getByTestId("buttonLogin");
  });

  test("Should render the inputs on the screen", () => {
    expect(inputEmail).toBeTruthy();
    expect(inputPassword).toBeTruthy();
    expect(inputEmail).toHaveValue(dataLogin.email);
    expect(inputPassword).toHaveValue(dataLogin.password);
  });

  test("Should update states of the inputs when the user type", () => {
    fireEvent.input(inputEmail, { target: { value: "email@example.com" } });
    fireEvent.input(inputPassword, { target: { value: "password" } });

    expect(inputEmail).toHaveValue("email@example.com");
    expect(inputPassword).toHaveValue("password");
  });

  test("Should show error message when have one or two empty input", () => {
    const messageError = "EMAIL OR PASSWORD CANNOT BE EMPTY";

    fireEvent.input(inputEmail, { target: { value: "" } });

    fireEvent.click(button);

    expect(toast.error).toHaveBeenCalledWith(messageError);

    fireEvent.input(inputPassword, { target: { value: "" } });
    fireEvent.input(inputEmail, { target: { value: "email@example.com" } });

    fireEvent.click(button);

    expect(toast.error).toHaveBeenCalledWith(messageError);
  });

  test("Should be able navigate to home screen when the login has successfull", () => {
    fireEvent.click(button);

    act(() => {
      vi.runAllTimers();
    });
    expect(mockNavigate).toHaveBeenCalledWith("/home");
  });
});
