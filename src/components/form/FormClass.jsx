import { course } from "../../data/course.js";
import { weekDays } from "../../data/weekDays.js";

export default function FormClass({ formData, handleChange }) {
  return (
    <form className="bg-gray-800 px-4 pt-4 rounded-md shadow sm:grid grid-cols-3 gap-10">
      <div className="mb-5">
        <label htmlFor="course" className="text-gray-300 font-bold block mb-1">
          Course
        </label>
        <select
          id="course"
          name="course"
          value={formData.course}
          onChange={handleChange}
          required
          className="block w-full p-2 bg-gray-300 rounded-sm text-black font-normal"
        >
          {course.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-5">
        <label htmlFor="weekDay" className="text-gray-300 font-bold block mb-1">
          Weekday
        </label>
        <select
          id="weekDay"
          name="weekDay"
          value={formData.weekDay}
          onChange={handleChange}
          required
          className="block w-full p-2 bg-gray-300 rounded-sm text-black font-normal"
        >
          {weekDays.map((day) => (
            <option key={day.id} value={day.id}>
              {day.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-5">
        <label htmlFor="time" className="text-gray-300 font-bold block mb-1">
          Time
        </label>
        <input
          id="time"
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          className="block w-full p-2 bg-gray-300 rounded-sm text-black font-normal"
        />
      </div>
    </form>
  );
}
