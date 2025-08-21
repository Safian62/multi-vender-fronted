import React, { useEffect } from "react";
import Header from "../components/layout/Header";
import EventCard from "../components/Events/EventCard";
import Footer from "../components/layout/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getAllEvents } from "../redux/actions/event";

const EventPage = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);
  console.log("Redux events state:", allEvents, isLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!allEvents || allEvents.length === 0) {
      dispatch(getAllEvents());
    }
  }, [dispatch, allEvents]);
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <Header activeHeading={4} />
      {allEvents && allEvents.length > 0 ? (
        <EventCard active={true} data={allEvents[0]} />
      ) : (
        <div>No events available</div>
      )}
      <Footer />
    </div>
  );
};

export default EventPage;
