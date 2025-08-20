import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi, beforeEach } from "vitest";
import ListItemsManager from "./ListItemsManager.jsx";

let dataMock;
let tableSelectedMock;

vi.mock("../../context/ContextProvider.jsx", () => ({
  useAppContext: () => ({
    data: dataMock,
    tableSelected: tableSelectedMock,
  }),
}));

vi.mock("../card/CardPerson.jsx", () => ({
  default: ({ item }) => <div>{item.name}</div>,
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

  test("renders 'NENHUM REGISTRO' when data is empty", () => {
    dataMock = { users: [] };
    render(<ListItemsManager />);
    expect(screen.getByText(/NENHUM REGISTRO/i)).toBeTruthy();
  });
});
