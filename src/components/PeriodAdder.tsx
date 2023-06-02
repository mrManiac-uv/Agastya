import { useState } from "react";
import DateRangePicker from "./DateRangePicker";
import ButtonPrimary from "./ButtonPrimary";
import TimePicker from "./TimePicker";
import DaysPicker from "./DaysPicker";

interface periodObject {
  periodDetails: (data: object) => void;
}

function PeriodAdder({ popUpWindow }: any, { periodDetails }: periodObject) {
  const [details, setDetails] = useState({
    Name: "",
    Start: "",
    End: "",
    Repeat: [],
    From: "",
    Color: "",
  });

  const [selectedColor, setSelectedColor] = useState("blushPearl");

  const handleColorChange = (e: any) => {
    setSelectedColor(e.target.value);
  };

  const addPeriod = () => {
    // periodDetails(details);
    popUpWindow();
  };

  return (
    <>
      <section className="bg-black/20 grid justify-center fixed top-0 w-screen min-h-screen">
        <div className="bg-white w-[40vw] h-fit rounded-3xl mt-20 py-8 px-10">
          <div className="flex justify-between">
            <h2>Add Period</h2>
            {/* Close Button */}
            <button
              onClick={(e) => {
                popUpWindow();
              }}
              className=" cursor-pointer"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_84_706)">
                  <path
                    d="M18 1.0605L16.9395 0L9 7.9395L1.0605 0L0 1.0605L7.9395 9L0 16.9395L1.0605 18L9 10.0605L16.9395 18L18 16.9395L10.0605 9L18 1.0605Z"
                    fill="#000"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_84_706">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
          <div className="grid gap-8 mt-10">
            <label>
              <h4>Period</h4>
              <input
                type="text"
                value={details.Name}
                onChange={(e) =>
                  setDetails({ ...details, Name: e.target.value })
                }
                className="w-full mt-2 py-4 px-6 border border-grey rounded-xl placeholder:font-light"
                placeholder="Enter Period Name"
              />
            </label>
            <section className="grid grid-cols-2 gap-4">
              <label>
                <h4>Start</h4>
                <TimePicker
                  selectedTime={(time: string) =>
                    setDetails({ ...details, Start: time })
                  }
                />
              </label>
              <label>
                <h4>End</h4>
                <TimePicker
                  selectedTime={(time: string) =>
                    setDetails({ ...details, End: time })
                  }
                />
              </label>
            </section>
            <section>
              <h4>Repeat on days</h4>
              <div className="grid grid-flow-col-dense gap-4 w-fit mt-2">
                <DaysPicker
                  selectedDays={(days: any) =>
                    setDetails({ ...details, Repeat: days })
                  }
                />
              </div>
            </section>
            <section>
              <h4>From</h4>
              <DateRangePicker
                selectedRange={(date: string) =>
                  setDetails({ ...details, From: date })
                }
              />
            </section>
            <section className="flex justify-between">
              <div className="grid grid-cols-4 gap-2 w-fit">
                <label
                  className={`bg-[#F8EBF1] w-8 h-8 border-2 rounded-full cursor-pointer shadow-md ${
                    selectedColor === "blushPearl"
                      ? "border-primary/40"
                      : "border-white"
                  }`}
                >
                  <input
                    type="radio"
                    value="blushPearl"
                    checked={selectedColor === "blushPearl"}
                    onChange={handleColorChange}
                    className="hidden"
                  />
                </label>

                <label
                  className={`bg-[#E9E8FD] w-8 h-8 border-2 rounded-full cursor-pointer shadow-md ${
                    selectedColor === "lavender"
                      ? "border-primary/40"
                      : "border-white"
                  }`}
                >
                  <input
                    type="radio"
                    value="lavender"
                    checked={selectedColor === "lavender"}
                    onChange={handleColorChange}
                    className="hidden"
                  />
                </label>

                <label
                  className={`bg-[#FFFBDA] w-8 h-8 border-2 rounded-full cursor-pointer shadow-md ${
                    selectedColor === "buttercream"
                      ? "border-primary/40"
                      : "border-white"
                  }`}
                >
                  <input
                    type="radio"
                    value="buttercream"
                    checked={selectedColor === "buttercream"}
                    onChange={handleColorChange}
                    className="hidden"
                  />
                </label>

                <label
                  className={`bg-[#CFFFF1] w-8 h-8 border-2 rounded-full cursor-pointer shadow-md ${
                    selectedColor === "Mint"
                      ? "border-primary/40"
                      : "border-white"
                  }`}
                >
                  <input
                    type="radio"
                    value="Mint"
                    checked={selectedColor === "Mint"}
                    onChange={handleColorChange}
                    className="hidden"
                  />
                </label>
              </div>
              <div onClick={addPeriod}>
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
          </div>
        </div>
      </section>
    </>
  );
}

export default PeriodAdder;
