import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api_utils";


 const Homepage = (props) => {
  return (
    <div>
          <EventList items={props.events} />
    </div>
  )
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents()
 
  return {
    props : {
      events:featuredEvents
    },
    revalidate: 1800
  }
}

export default Homepage;
