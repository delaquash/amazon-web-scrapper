import { useRouter } from "next/router";
import { Fragment } from "react";
import { getEventById } from '../../dummy-data';
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

const EventDetailPage =()=> {

  /* A hook that gives us access to the router object. */
  const router = useRouter();

  /* Getting the id from the url. */
  const eventId = router.query.eventId;

 /* A function that is getting the event by the id. */
 const event= getEventById(eventId)
 if(!event) {
   return <p>No event found</p>
 }
  return (
    <Fragment>
      <EventSummary title={event.title}/>
      <EventLogistics 
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  )
}

export default EventDetailPage;