import { useState } from "react";

function DaysPicker({ selectedDays }: any) {
  const [days, setDays] = useState({
    Sunday: false,
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
  });
  const handleCheckboxChange = (e: any) => {
    const { name, checked } = e.target;
    setDays({ ...days, [name]: checked });
    updateSelectedDays();
  };

  const updateSelectedDays = () => {
    const selection = Object.keys(days).filter((day) => days[day]);
    selectedDays(selection);
  };

  return (
    <>
      <label
        className={`grid place-content-center w-10 h-10 rounded-full cursor-pointer ${
          days.Sunday ? "bg-primary text-white" : "bg-secondary"
        }`}
      >
        S
        <input
          type="checkbox"
          name="Sunday"
          checked={days.Sunday}
          onChange={handleCheckboxChange}
          className="hidden"
        />
      </label>
      <label
        className={`grid place-content-center w-10 h-10 rounded-full cursor-pointer ${
          days.Monday ? "bg-primary text-white" : "bg-secondary"
        }`}
      >
        M
        <input
          type="checkbox"
          name="Monday"
          checked={days.Monday}
          onChange={handleCheckboxChange}
          className="hidden"
        />
      </label>
      <label
        className={`grid place-content-center w-10 h-10 rounded-full cursor-pointer ${
          days.Tuesday ? "bg-primary text-white" : "bg-secondary"
        }`}
      >
        T
        <input
          type="checkbox"
          name="Tuesday"
          checked={days.Tuesday}
          onChange={handleCheckboxChange}
          className="hidden"
        />
      </label>
      <label
        className={`grid place-content-center w-10 h-10 rounded-full cursor-pointer ${
          days.Wednesday ? "bg-primary text-white" : "bg-secondary"
        }`}
      >
        W
        <input
          type="checkbox"
          name="Wednesday"
          checked={days.Wednesday}
          onChange={handleCheckboxChange}
          className="hidden"
        />
      </label>
      <label
        className={`grid place-content-center w-10 h-10 rounded-full cursor-pointer ${
          days.Thursday ? "bg-primary text-white" : "bg-secondary"
        }`}
      >
        T
        <input
          type="checkbox"
          name="Thursday"
          checked={days.Thursday}
          onChange={handleCheckboxChange}
          className="hidden"
        />
      </label>
      <label
        className={`grid place-content-center w-10 h-10 rounded-full cursor-pointer ${
          days.Friday ? "bg-primary text-white" : "bg-secondary"
        }`}
      >
        F
        <input
          type="checkbox"
          name="Friday"
          checked={days.Friday}
          onChange={handleCheckboxChange}
          className="hidden"
        />
      </label>
      <label
        className={`grid place-content-center w-10 h-10 rounded-full cursor-pointer ${
          days.Saturday ? "bg-primary text-white" : "bg-secondary"
        }`}
      >
        S
        <input
          type="checkbox"
          name="Saturday"
          checked={days.Saturday}
          onChange={handleCheckboxChange}
          className="hidden"
        />
      </label>
    </>
  );
}

export default DaysPicker;
