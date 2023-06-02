import Tabs from "../components/Tabs";
import Calendar from "../components/Calendar";
import PeriodAdder from "../components/PeriodAdder";
import { useState } from "react";

function Planner() {
  const [addPeriod, setaddPeriod] = useState(false);
  const open = () => {
    setaddPeriod(true);
  };
  const close = () => {
    setaddPeriod(false);
  };

  const handleData = (data: object) => {
    console.log(data);
  };

  return (
    <>
      <Tabs />

      <Calendar addPeriod={open} />

      {addPeriod && (
        <PeriodAdder popUpWindow={close} periodDetails={handleData} />
      )}
    </>
  );
}

export default Planner;
