import { render, fireEvent } from "@testing-library/react";
import { test, expect, vi, describe } from "vitest";
import SendButton from "./SendButton.jsx";

vi.mock("react-icons/fa", () => ({
  FaRegPaperPlane: () => <div data-testid="iconFaRegPaperPlane" />,
}));

const onClick = vi.fn();

describe("SendButton", () => {
  test("Should render the button and icon on screen", () => {
    const { getByTestId } = render(<SendButton onClick={onClick} />);
    expect(getByTestId("button-SendButton")).toBeInTheDocument();
    expect(getByTestId("iconFaRegPaperPlane")).toBeInTheDocument();
  });

  test("Should call onClick when button is clicked", () => {
    const { getByTestId } = render(<SendButton onClick={onClick} />);
    fireEvent.click(getByTestId("button-SendButton"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
