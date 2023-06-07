import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';


const ShowDetails = ({showId}) => {

	const [show, setShow] = useState(null);
	let navigate = useNavigate();

	useEffect(() => {
		fetch(`https://api.tvmaze.com/shows/${showId}`)
			.then((response) => response.json())
			.then((data) => setShow(data))
			.catch((error) => console.log(error));
	}, [showId]);

	const navigateToTicketBookingForm = (showId) => {
		navigate(`/booking/${showId}`);
	};

	return (
		<main className="show-details-page">
			<h2>Show Details</h2>
			{show ? (
				<>
					<h3>{show.name}</h3>
					<p>Type: {show.type}</p>
					<p>Language: {show.language}</p>
					{/* Add more show details as needed */}
					<p>Summary: {show.summary}</p>
				</>
			) : (
				<p>Loading show details...</p>
			)}
			<button onClick={() => navigateToTicketBookingForm(show.id)}>Book a Movie Ticket</button>
		</main>
	)
}

export default ShowDetails
