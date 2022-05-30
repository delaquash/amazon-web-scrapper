import { Fragment } from 'react';
import { useRouter } from 'next/router';
import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import { getFilteredEvents } from '../../dummy-data';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';


const filteredEventPages =()=> {
    const router = useRouter();
    const filterData = router.query.slug;
    

    if(!filterData) {
        return (
            <p className='center'>Loading....</p>
        )
    }

    const filteredYear= filterData[0];
    const filteredMonth = filterData[1];

    const numYear = +filteredYear
    const numMonth = +filteredMonth

    if(isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
        return (
        <Fragment>
            <ErrorAlert>
                <p>
                    Invalid input parameters! Kindly check and choose appropriately 
                </p>
            </ErrorAlert>
            <div className="center">
                <Button link='/event'>Show all events</Button>
            </div>
        </Fragment>
    )}

    const filteredEvent = getFilteredEvents({
            year: numYear,
            month: numMonth
    });

    if(!filteredEvent || filteredEvent === 0) {
        return (
            <Fragment>
                <ErrorAlert>
                    <p>No event chosen for this filtered parameters</p>
                </ErrorAlert>
                <div className="center">
                    <Button link='/event'>Show all events</Button>
                </div>
            </Fragment>
        )
    }

    const date = new Date(numYear, numMonth -1)

    return(
        <Fragment>
            <ResultsTitle date={date} />
            <EventList items={filteredEvent}/>
        </Fragment>
    )
}

export default filteredEventPages