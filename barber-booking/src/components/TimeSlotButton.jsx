import React from "react";

const TimeSlotButton = ({ time, selected, onSelect }) => {
  return (
    <button
      onClick={onSelect}
      className={`p-2 border rounded ${
        selected ? "bg-black text-white" : "bg-white"
      }`}
    >
      {time}
    </button>
  );
};

export default TimeSlotButton;
