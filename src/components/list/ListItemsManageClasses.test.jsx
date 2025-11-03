import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi, beforeEach } from "vitest";
import ListItemsManager from "./ListItemsManager.jsx";

vi.mock("../../context/ContextProvider.jsx", () => ({
  useAppContext: () => ({
    data: {},
    tableSelected: "users",
  }),
}));

vi.mock("../card/CardPerson.jsx", () => ({
  default: ({ item }) => <div>{item.name}</div>,
}));

let dataMock;
let tableSelectedMock;

vi.mock("../../context/ContextProvider.jsx", () => ({
  useAppContext: () => ({
    data: dataMock,
    tableSelected: tableSelectedMock,
  }),
}));

describe("ListItemsManager", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    dataMock = { users: [{ name: "Alice" }, { name: "Bob" }] };
    tableSelectedMock = "users";
  });

  test("renders all items when data is available", () => {
    render(<ListItemsManager />);
    expect(screen.getByText(/Alice/i)).toBeTruthy();
    expect(screen.getByText(/Bob/i)).toBeTruthy();
  });

  test("renders 'NO ENTRIES' when data is empty", () => {
    dataMock = { users: [] };
    render(<ListItemsManager />);
    expect(screen.getByText(/NO ENTRIES/i)).toBeTruthy();
  });
});
