import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi, beforeEach } from "vitest";
import FormClass from "./FormClass.jsx";
import { course } from "../../data/course.js";
import { weekDays } from "../../data/weekDays.js";

const mockHandleChange = vi.fn();
let formDataMock = {
  course: course[0]?.id || "",
  weekDay: weekDays[0]?.id || "",
  time: "10:00",
};

describe("FormClass", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    formDataMock = {
      course: course[0]?.id || "",
      weekDay: weekDays[0]?.id || "",
      time: "10:00",
    };
  });

  test("renders all form fields with initial values", () => {
    render(
      <FormClass formData={formDataMock} handleChange={mockHandleChange} />
    );

    const courseSelect = screen.getByLabelText(/Course/i);
    expect(courseSelect).toBeTruthy();
    expect(courseSelect.value).toBe(formDataMock.course.toString());

    const weekDaySelect = screen.getByLabelText(/Weekday/i);
    expect(weekDaySelect).toBeTruthy();
    expect(weekDaySelect.value).toBe(formDataMock.weekDay.toString());

    const timeInput = screen.getByLabelText(/Time/i);
    expect(timeInput).toBeTruthy();
    expect(timeInput.value).toBe(formDataMock.time);
  });

  test("calls handleChange when course is changed", () => {
    render(
      <FormClass formData={formDataMock} handleChange={mockHandleChange} />
    );
    const courseSelect = screen.getByLabelText(/Course/i);
    fireEvent.change(courseSelect, { target: { value: course[1]?.id || "" } });
    expect(mockHandleChange).toHaveBeenCalled();
  });

  test("calls handleChange when weekDay is changed", () => {
    render(
      <FormClass formData={formDataMock} handleChange={mockHandleChange} />
    );
    const weekDaySelect = screen.getByLabelText(/Weekday/i);
    fireEvent.change(weekDaySelect, {
      target: { value: weekDays[1]?.id || "" },
    });
    expect(mockHandleChange).toHaveBeenCalled();
  });

  test("calls handleChange when time is changed", () => {
    render(
      <FormClass formData={formDataMock} handleChange={mockHandleChange} />
    );
    const timeInput = screen.getByLabelText(/Time/i);
    fireEvent.change(timeInput, { target: { value: "12:30" } });
    expect(mockHandleChange).toHaveBeenCalled();
  });

  test("renders all course options", () => {
    render(
      <FormClass formData={formDataMock} handleChange={mockHandleChange} />
    );
    course.forEach((c) => {
      expect(screen.getByRole("option", { name: c.name })).toBeTruthy();
    });
  });

  test("renders all week day options", () => {
    render(
      <FormClass formData={formDataMock} handleChange={mockHandleChange} />
    );
    weekDays.forEach((d) => {
      expect(screen.getByRole("option", { name: d.name })).toBeTruthy();
    });
  });
});
