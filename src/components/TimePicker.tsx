function TimePicker({ selectedTime }: any) {
  const currentTime = new Date();
  const currentMinute = currentTime.getMinutes();
  const currentHour =
    currentMinute > 30 ? currentTime.getHours() + 1 : currentTime.getHours();
  const roundedMinute = currentMinute > 30 ? "00" : "30";
  const roundedTime = `${String(currentHour).padStart(2, "0")}:${String(
    roundedMinute
  ).padStart(2, "0")}`;

  const renderTimeSlots = () => {
    const timeSlots = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const formattedHour = hour % 12 || 12; // Converting 24hr to 12hr
        const formattedMinute = String(minute).padStart(2, "0");
        const ampm = hour < 12 ? "am" : "pm";
        const time = `${formattedHour}:${formattedMinute} ${ampm}`;
        timeSlots.push(
          <option value={time} onClick={() => selectedTime(time)} key={time}>
            {time}
          </option>
        );
      }
    }
    return timeSlots;
  };

  return (
    <>
      <div className="relative">
        <select
          defaultValue={roundedTime}
          className="w-full mt-2 py-4 px-6 border border-grey rounded-xl placeholder:text-black"
        >
          {renderTimeSlots()}
        </select>
      </div>
    </>
  );
}

export default TimePicker;
