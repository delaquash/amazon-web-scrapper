import Link from "next/link";
import Image from 'next/image';

const EventItem = (props) => {
    const { title, date, image,location, id} = props
    const humanReadableDate = new Date(date).toLocaleDateString('en-us', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    const formatedAdress = location.replace(', ', '\n');
    const exploreLink = `/events/${id}`;

  return <li>
      <Image 
        src={'/' + image} 
        alt="title" 
        width={500}
        height={500}
    />
      <div>
          <div>
              <h2>{title}</h2>
              <div>
                  <time>{humanReadableDate}</time>
              </div>
              <div>
                  <address>{formatedAdress}</address>
              </div>
          </div>
          <div>
            <Link href={exploreLink}>Explore Event</Link>
          </div>
      </div>
  </li>
}

export default EventItem;