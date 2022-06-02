import { useRouter } from "next/router";
import { Fragment } from "react";
import { getEventById } from '../../helpers/api_utils';
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";



const EventDetailPage =(props)=> {
 /* A function that is getting the event by the id. */
 const event= props(selectedEvent);
 if(!event) {
   return (
     <ErrorAlert>
        <p>No event found</p>
     </ErrorAlert>
   )
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

export async function getStaticProps(context){
  const eventId = context.params.eventId
  const event = await getEventById(eventId)

  return {
    props: {
      selectedEvent: event
    }
  }

}


export default EventDetailPage;