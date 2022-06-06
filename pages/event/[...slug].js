import { Fragment } from 'react';
import { useRouter } from 'next/router';
import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import { getFilteredEvents } from '../../helpers/api_utils';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';


const filteredEventPages =(props)=> {
    const router = useRouter()
    // const filterData = router.query.slug;
    

    // if(!filterData) {
    //     return (
    //         <p className='center'>Loading....</p>
    //     )
    // }

    // const filteredYear= filterData[0];
    // const filteredMonth = filterData[1];

    // const numYear = +filteredYear
    // const numMonth = +filteredMonth

    if(props.hasError) {
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

    const filteredEvent = props.event

    if(!filteredEvents || filteredEvents === 0) {
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

    const date = new Date(props.date.year, props.date.month -1)

    return(
        <Fragment>
            <ResultsTitle date={date} />
            <EventList items={filteredEvents}/>
        </Fragment>
    )
}

export async function getServerSideProps(context) {
    const { params } = context;
    const filteredData = params.slug
    const filteredYear= filteredData[0];
    const filteredMonth = filteredData[1];

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    if(isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
        return {
            props: { hasError : true }
            // notFound : true
        }}

    const filteredEvents = await getFilteredEvents({
        year: numYear,
        month: numMonth
});

    return {
        props: {
            event: filteredEvents,
            date: {
                year: numYear,
                month: numMonth
            }
        }
    }
}


export default filteredEventPages