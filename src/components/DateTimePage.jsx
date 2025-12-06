import React from "react";
import TimeSlotButton from "./TimeSlotButton";

const times = ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM"];

const DateTimePage = ({
  setCurrentPage,
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
}) => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Select Date & Time</h2>

      <input
        type="date"
        className="border p-2 rounded mb-6"
        value={selectedDate || ""}
        onChange={(e) => setSelectedDate(e.target.value)}
      />

      <div className="grid grid-cols-2 gap-3">
        {times.map((time, index) => (
          <TimeSlotButton
            key={index}
            time={time}
            selected={selectedTime === time}
            onSelect={() => setSelectedTime(time)}
          />
        ))}
      </div>

      <button
        className="mt-6 px-6 py-3 bg-black text-white rounded-lg"
        onClick={() => setCurrentPage("details")}
      >
        Next
      </button>
    </div>
  );
};

export default DateTimePage;
