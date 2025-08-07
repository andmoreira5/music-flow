import { render, fireEvent } from "@testing-library/react";
import { test } from "vitest";
import { expect } from "vitest";
import { vi } from "vitest";
import { describe } from "vitest";
import ReturnButton from "./ReturnButton.jsx";

vi.mock("react-icons/fa", () => ({
  FaUndo: () => <div data-testid="iconFaUndo" />,
}));

const onClick = vi.fn();

describe("ReturnButton", () => {
  test("Should be able to render the item on the screen", () => {
    const { getByTestId } = render(<ReturnButton onClick={onClick} />);
    expect(getByTestId("button-ReturnButton")).toBeInTheDocument();
    expect(getByTestId("iconFaUndo")).toBeInTheDocument();
  });

  test("Should be able to click on the component", () => {
    const { getByTestId } = render(<ReturnButton onClick={onClick} />);
    fireEvent.click(getByTestId("button-ReturnButton"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
