import { render } from "@testing-library/react";
import { expect } from "vitest";
import { describe } from "vitest";
import Total from "./Total.jsx";
import { test } from "vitest";

describe("Total", () => {
  test("Should be able to render the item on the screen", () => {
    const { getByTestId } = render(<Total />);
    expect(getByTestId("Total")).toBeInTheDocument();
    expect(getByTestId("quantityTotal")).toBeInTheDocument();
    expect(getByTestId("subtitleTotal")).toBeInTheDocument();
  });

  test("Should be able to render correctly the prop values", () => {
    const { getByTestId } = render(<Total quantity={10} subtitle="students" />);
    expect(getByTestId("quantityTotal")).toHaveTextContent("10");
    expect(getByTestId("subtitleTotal")).toHaveTextContent("students");
  });
});
