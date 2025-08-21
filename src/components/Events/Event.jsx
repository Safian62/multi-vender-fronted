import React, { useEffect } from "react";
import styles from "../../styles/style";
import EventCard from "./EventCard.jsx";
import { useSelector } from "react-redux";
const Event = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);
    console.log(allEvents)
  return (
    <div>
      {!isLoading && (
        <div className={`${styles.section}`}>
          <div className={`${styles.heading}`}>
            <h1>Popular Events</h1>
          </div>
          <div className="w-full grid">
            <EventCard data={allEvents && allEvents[0]} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Event;
