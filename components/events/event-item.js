import Link from "next/link";
import Image from 'next/image';
import Button from '../ui/button';
import DateIcon from '../icons/date-icon';
import Address from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';

import classes from './event-item.module.css';


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
                  <DateIcon />
                  <time>{humanReadableDate}</time>
              </div>
              <div className={classes.address}>
                  <Address />
                  <address>{formatedAdress}</address>
              </div>
          </div>
          <div className={classes.actions}> 
            <Button link={exploreLink}>
               <span>Explore Event</span> 
               <span className={classes.icon}> 
                    <ArrowRightIcon />
               </span>
            </Button>
          </div>
      </div>
  </li>
}

export default EventItem;