import React from "react";
import Clock from "./Clock";
import showNotification from "@/hooks/useShowNotification";

const ClocksList = () => {
  const [newYork,setNewYork] = React.useState<any>({time:"", status: ""})
  const [london,setLondon] = React.useState<any>({time:"", status: ""})
  const [tokyo,setTokyo] = React.useState<any>({time:"", status: ""})
 
    const setTime = () => {
      setNewYork(checkTime("New York", new Date()
      .toLocaleString("en-US", { timeZone: "America/New_York", hour12: false })
      .split(",")[1]))
      setLondon(checkTime("london", new Date()
      .toLocaleString("en-US", { timeZone: "Europe/London", hour12: false })
      .split(",")[1]))
      setTokyo(checkTime("tokyo", new Date()
      .toLocaleString("en-US", { timeZone: "Asia/Tokyo", hour12: false })
      .split(",")[1]))
    }
  
  function checkTime(location: string ,time: any) {
    const [hours, minutes, seconds] = time.split(":");
    const currentHour = parseInt(hours);

    if (currentHour >= 9 && currentHour <= 16) {
      return {time: time, status: "open"}
    } else if(hours == "08" && minutes > 20 && minutes < 40){
      showNotification(`${location} market is about to open`, `${location} market`)
    } else {
      return {time: time, status: "close"}
    }
  }

  React.useEffect(()=>{
    const intervalId = setInterval(() => {
      setTime();
    }, 1000);

    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(intervalId);
  },[])

  return (
    <div className="flex justify-between w-2/6 capitalize">
      <Clock market={"new york"} status={newYork.status} time={newYork.time} />
      <Clock market={"london"} status={london.status} time={london.time} />
      <Clock market={"tokyo"} status={tokyo.status} time={tokyo.time} />
    </div>
  );
};

export default ClocksList;
