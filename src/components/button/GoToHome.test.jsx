import { render, fireEvent } from "@testing-library/react";
import { test, expect, vi, describe } from "vitest";
import GoToHome from "./GoToHome.jsx";

vi.mock("react-icons/io5", () => ({
  IoHome: () => <div data-testid="icon-IoHome" />,
}));

const mockedNavigate = vi.fn();
vi.mock("react-router-dom", () => ({
  useNavigate: () => mockedNavigate,
}));

const setScreenMock = vi.fn();
vi.mock("../../context/ContextProvider.jsx", () => ({
  useAppContext: () => ({
    setScreen: setScreenMock,
  }),
}));

vi.mock("../../utils/setBarColor.js", () => ({
  setBarColor: vi.fn(),
}));

describe("GoToHome component", () => {
  test("Should render the button and icon on screen", () => {
    const { getByTestId } = render(<GoToHome />);
    expect(getByTestId("button-GoToHome")).toBeInTheDocument();
    expect(getByTestId("icon-IoHome")).toBeInTheDocument();
  });

  test("Should call setScreen, setBarColor and navigate on button click", () => {
    const { getByTestId } = render(<GoToHome />);
    fireEvent.click(getByTestId("button-GoToHome"));

    expect(setScreenMock).toHaveBeenCalledWith({
      title: "HOME",
      color: "bg-slate-800",
    });
    expect(mockedNavigate).toHaveBeenCalledWith("/home");
  });
});
