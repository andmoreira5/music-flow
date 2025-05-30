import "@testing-library/jest-dom";
import { vi } from "vitest";

vi.mock("react-toastify", () => ({
  toast: {
    error: vi.fn(),
    success: vi.fn(),
  },
}));

vi.mock("react-router-dom", () => ({
  useNavigate: vi.fn(),
}));

vi.mock("./src/context/ContextProvider.jsx", () => ({
  useAppContext: vi.fn(() => ({
    setIsLoggedIn: vi.fn(),
    setUserData: vi.fn(),
  })),
}));
