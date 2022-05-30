import { Fragment } from "react";
import { useRouter } from "next/router";
import { getAllEvents } from "../../dummy-data"
import EventList from '../../components/events/event-list';
import EventSearch from "../../components/events/event-search";



const AllEventsPage=()=> {
  const events = getAllEvents();
  const router = useRouter();
  

  const findEventHandler = (month, year) => {
    const fullPath = `/event/${month}/${year}`;
    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventSearch onSearch={findEventHandler}/>
        <EventList items={events} />
    </Fragment>
  )
}

export default AllEventsPage;