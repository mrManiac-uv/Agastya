import Tabs from "../components/Tabs";
import Calendar from "../components/Calendar";
import PeriodAdder from "../components/PeriodAdder";
import { useState } from "react";

function Planner() {
  const [addPeriod, setaddPeriod] = useState(false);
  const buttonState = (isClicked: boolean) => {
    setaddPeriod(isClicked);
  };

  return (
    <>
      <Tabs />

      <Calendar addPeriod={buttonState} />
      {addPeriod && <PeriodAdder popUpWindow={buttonState} />}
    </>
  );
}

export default Planner;
