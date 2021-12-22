import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    // Only run the HTTP GET request once when the component renders for the 1st time. This is to avoid the infinite loop if we place the fetch() function outside of useEffect() function.
    // Remember that whenever a state changes, React re-renders the page to reflect updated changes to the state, and so the fetch() function should be inside this function so that it only makes a request once to the Firebase API.
    useEffect(() => {
        fetch('https://react-tut-d3e68-default-rtdb.firebaseio.com/meetups.json')
        .then(response => {
            return response.json(); // Read the data from Firebase API
        }).then(data => {
            const meetups = [];
            
            for (const key in data) {
                const meetup = {
                    id: key,
                    ...data[key]
                };
                meetups.push(meetup);
            }
            setIsLoading(false);
            setLoadedMeetups(meetups); // Once data is retrieved, store this data in the loadedMeetups state
        });
    }, []);

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
