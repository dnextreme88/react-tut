import { useHistory } from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    const history = useHistory();

    function addMeetupHandler(meetupData) {
        // For sending an HTTP request similar to axios library
        // By default, fetch(url) sends a GET request unless you pass a second argument, which is an object
        fetch(
            'https://react-tut-d3e68-default-rtdb.firebaseio.com/meetups.json',
            { // body key must be an object in JSON format so use JSON.stringify()
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: { 'Content-Type': 'application/json' }
            }
        ).then(() => {
            history.replace('/'); // Navigate away but using the back button will not go back to the previous page, which is the form
        });
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    );
}

export default NewMeetupPage;
