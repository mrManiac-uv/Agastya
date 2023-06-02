import { useState } from "react";
import ButtonPrimary from "../components/ButtonPrimary";

function Calendar({ addPeriod }: any) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const selectedDay = selectedDate.getDay() - 1;

  const handlePrevWeek = () => {
    setSelectedDate((prevDate) => {
      const prevWeek = new Date(
        prevDate.getFullYear(),
        prevDate.getMonth(),
        prevDate.getDate() - 7
      );
      return prevWeek;
    });
  };

  const handleNextWeek = () => {
    setSelectedDate((prevDate) => {
      const nextWeek = new Date(
        prevDate.getFullYear(),
        prevDate.getMonth(),
        prevDate.getDate() + 7
      );
      return nextWeek;
    });
  };

  const refresh = () => {
    setSelectedDate(new Date());
  };

  const getMonday = () => {
    let monday = selectedDate.getDate() - selectedDay;
    if (monday < 0)
      monday += new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        0
      ).getDate();
    return monday;
  };

  const getFriday = (monday: number) => {
    let friday = monday + 6;
    const lastDate = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      0
    ).getDate();
    if (friday > lastDate) friday -= lastDate;
    return friday;
  };

  const renderCalendarColumn = () => {
    const calendarCells = [];
    const startDate = new Date(selectedDate);
    const endDate = new Date(selectedDate);
    endDate.setDate(endDate.getDate() + 6);

    let currentDate = new Date();

    // To keep Monday as the first day of the week
    startDate.setDate(startDate.getDate() - selectedDay);
    endDate.setDate(endDate.getDate() - selectedDay);

    while (startDate <= endDate) {
      // For highlighting today's date
      const isCurrentDate =
        currentDate.toDateString() === startDate.toDateString();

      calendarCells.push(
        <div key={startDate.toISOString()} className="w-fit mx-auto">
          <div
            className={`text-center text-xs uppercase font-semibold mb-1 ${
              isCurrentDate ? "text-primary" : "text-black"
            }`}
          >
            {startDate.toLocaleDateString("en-US", { weekday: "short" })}
          </div>
          <div
            className={`grid place-content-center text-xl font-bold leading-[1] w-12 h-12 rounded-full ${
              isCurrentDate ? "bg-primary text-white" : "bg-white"
            }`}
          >
            {startDate.getDate()}
          </div>
        </div>
      );

      // Move to next date
      startDate.setDate(startDate.getDate() + 1);
    }

    // Returning the JSX list of the 7 days
    return calendarCells;
  };

  const timings = [];
  timings.push(<div className="w-1/3 h-4 ml-auto border-b border-light"></div>);
  for (let i = 8; i < 20; i++) {
    timings.push(
      <div
        id={`time${i}`}
        key={i}
        className="flex justify-end text-grey text-xs ml-auto pr-2 w-1/3 min-h-[3rem] border-b border-light"
      >
        {i}:00
      </div>
    );
  }

  const slots = [];
  slots.push(<div className="w-full h-4 border-l border-b border-light"></div>);
  for (let i = 8; i < 20; i++) {
    slots.push(
      <div
        id={`slot${i}`}
        key={i}
        className="w-full min-h-[3rem] border-l border-b border-light"
      ></div>
    );
  }

  const sections = [];
  for (let i = 0; i < 7; i++) {
    sections.push(
      <section id={`day${i}`} key={i}>
        {slots}
      </section>
    );
  }

  return (
    <>
      <section className="flex justify-between px-16 py-3">
        <section className="flex">
          <div className="flex items-center gap-3 w-44">
            {/* Month */}
            <h2>
              {selectedDate.toLocaleString("default", {
                month: "long",
              })}
            </h2>
            <h2>
              {getMonday()}-{getFriday(getMonday())}
            </h2>
          </div>
          <div className="flex items-center gap-1">
            {/* Previous Week Button */}
            <button
              onClick={handlePrevWeek}
              className="hover:bg-secondary p-1 rounded-md"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0227 14.6477C12.2224 14.448 12.2406 14.1355 12.0772 13.9153L12.0227 13.8523L7.17075 9L12.0227 4.14775C12.2224 3.94805 12.2406 3.63555 12.0772 3.41534L12.0227 3.35225C11.823 3.15255 11.5105 3.1344 11.2903 3.29779L11.2273 3.35225L5.97725 8.60225C5.77755 8.80195 5.7594 9.11445 5.92279 9.33466L5.97725 9.39775L11.2273 14.6477C11.4469 14.8674 11.8031 14.8674 12.0227 14.6477Z"
                  fill="black"
                />
              </svg>
            </button>
            <button
              onClick={refresh}
              className="hover:bg-secondary px-2 py-1 rounded-md"
            >
              Today
            </button>
            <button
              onClick={handleNextWeek}
              className="hover:bg-secondary p-1 rounded-md"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.97725 14.6477C5.77755 14.448 5.7594 14.1355 5.92279 13.9153L5.97725 13.8523L10.8293 9L5.97725 4.14775C5.77755 3.94805 5.7594 3.63555 5.92279 3.41534L5.97725 3.35225C6.17695 3.15255 6.48945 3.1344 6.70966 3.29779L6.77275 3.35225L12.0227 8.60225C12.2224 8.80195 12.2406 9.11445 12.0772 9.33466L12.0227 9.39775L6.77275 14.6477C6.55308 14.8674 6.19692 14.8674 5.97725 14.6477Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </section>
        <div onClick={() => addPeriod()}>
          <ButtonPrimary
            title="Add Period"
            svg={
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.327 0.75C15.0472 0.75 16.875 2.6595 16.875 5.50125V12.1237C16.875 14.9655 15.0472 16.875 12.327 16.875H5.298C2.57775 16.875 0.75 14.9655 0.75 12.1237V5.50125C0.75 2.6595 2.57775 0.75 5.298 0.75H12.327ZM12.327 1.875H5.298C3.219 1.875 1.875 3.29775 1.875 5.50125V12.1237C1.875 14.3272 3.219 15.75 5.298 15.75H12.327C14.4067 15.75 15.75 14.3272 15.75 12.1237V5.50125C15.75 3.29775 14.4067 1.875 12.327 1.875ZM8.8125 5.49547C9.123 5.49547 9.375 5.74748 9.375 6.05797V8.2425L11.5624 8.24265C11.8729 8.24265 12.1249 8.49465 12.1249 8.80515C12.1249 9.11565 11.8729 9.36765 11.5624 9.36765L9.375 9.3675V11.5532C9.375 11.8637 9.123 12.1157 8.8125 12.1157C8.502 12.1157 8.25 11.8637 8.25 11.5532V9.3675L6.06262 9.36765C5.75137 9.36765 5.50012 9.11565 5.50012 8.80515C5.50012 8.49465 5.75137 8.24265 6.06262 8.24265L8.25 8.2425V6.05797C8.25 5.74748 8.502 5.49547 8.8125 5.49547Z"
                  fill="white"
                />
              </svg>
            }
          />
        </div>
      </section>
      <section className="px-16 py-10 -ml-[8%]">
        <div className="grid grid-cols-8 gap-2 p-4">
          <div></div>
          {renderCalendarColumn()}
        </div>
        <div className="grid grid-cols-8 relative">
          <section>{timings}</section>
          {sections}
          <div className="overlay"></div>
        </div>
      </section>
      <section className="grid place-content-center gap-6 fixed w-full h-[60vh] bottom-0">
        <h3 className="capitalize">start planning your week;)</h3>
        <section className="grid justify-center">
          <div onClick={() => addPeriod()}>
            <ButtonPrimary
              title="Add Period"
              svg={
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.327 0.75C15.0472 0.75 16.875 2.6595 16.875 5.50125V12.1237C16.875 14.9655 15.0472 16.875 12.327 16.875H5.298C2.57775 16.875 0.75 14.9655 0.75 12.1237V5.50125C0.75 2.6595 2.57775 0.75 5.298 0.75H12.327ZM12.327 1.875H5.298C3.219 1.875 1.875 3.29775 1.875 5.50125V12.1237C1.875 14.3272 3.219 15.75 5.298 15.75H12.327C14.4067 15.75 15.75 14.3272 15.75 12.1237V5.50125C15.75 3.29775 14.4067 1.875 12.327 1.875ZM8.8125 5.49547C9.123 5.49547 9.375 5.74748 9.375 6.05797V8.2425L11.5624 8.24265C11.8729 8.24265 12.1249 8.49465 12.1249 8.80515C12.1249 9.11565 11.8729 9.36765 11.5624 9.36765L9.375 9.3675V11.5532C9.375 11.8637 9.123 12.1157 8.8125 12.1157C8.502 12.1157 8.25 11.8637 8.25 11.5532V9.3675L6.06262 9.36765C5.75137 9.36765 5.50012 9.11565 5.50012 8.80515C5.50012 8.49465 5.75137 8.24265 6.06262 8.24265L8.25 8.2425V6.05797C8.25 5.74748 8.502 5.49547 8.8125 5.49547Z"
                    fill="white"
                  />
                </svg>
              }
            />
          </div>
        </section>
      </section>
    </>
  );
}

export default Calendar;
