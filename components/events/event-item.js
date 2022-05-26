import Link from "next/link";
import Image from 'next/image';
import classes from './event-item.module.css';
import Button from '../ui/button';

const EventItem = (props) => {
    const { title, date, image,location, id} = props
    const humanReadableDate = new Date(date).toLocaleDateString('en-us', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    const formatedAdress = location.replace(', ', '\n');
    const exploreLink = `/events/${id}`;

  return <li className={classes.item}>
      <Image 
        src={'/' + image} 
        alt="title" 
        width={500}
        height={500}
    />
      <div className={classes.content}>
          <div className={classes.summary}>
              <h2>{title}</h2>
              <div className={classes.date}>
                  <time>{humanReadableDate}</time>
              </div>
              <div className={classes.address}>
                  <address>{formatedAdress}</address>
              </div>
          </div>
          <div className={classes.actions}> 
            <Button link={exploreLink}>Explore Event</Button>
          </div>
      </div>
  </li>
}

export default EventItem;