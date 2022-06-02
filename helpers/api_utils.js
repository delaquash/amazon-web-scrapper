export async function getAllEvents() {
   const res = await fetch('https://event-app-76a2d-default-rtdb.firebaseio.com/events.json')
   const data = await res.json();

   const events = [];
 /* Looping through the data and pushing it into the events array. */
   for( const key in data ) {
       events.push({
           id: key,
           ...data[key]
       });
   }
   return events;
}


/**
 * Get all events, then filter out the ones that are not featured.
 * @returns An array of events that are featured.
 */
export async function getFeaturedEvents() {
    const allEvents = await getAllEvents()
    return allEvents.filter((event) => event.isFeatured)
}



export async function getEventById(id) {
    const allEvents = await getAllEvents()
    return allEvents.find((event) => event.id === id);
  }