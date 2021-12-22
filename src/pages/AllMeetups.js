import { useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    // Will cause an infinite loop because we keep fetching data whenever we send a request to our Firebase API.
    // Remember that whenever a state changes, React re-renders the page to reflect updated changes to the state, and so the fetch() function will be called over and over again, making lots of requests to the Firebase API.
    fetch('https://react-tut-d3e68-default-rtdb.firebaseio.com/meetups.json')
        .then(response => {
            return response.json(); // Read the data from Firebase API
        }).then(data => {
            setIsLoading(false);
            setLoadedMeetups(data); // Once data is retrieved, store this data in the loadedMeetups state
        });

    if (isLoading) {
        return (
            <section><p>Loading...</p></section>
        );
    }

    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetups} />
        </section>
    );
}

export default AllMeetupsPage;
