import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

import './styles.scss';

const ShowDetails = () => {
	const [show, setShow] = useState(null);
	let navigate = useNavigate();
	let { showId } = useParams();

	useEffect(() => {
		fetch(`https://api.tvmaze.com/shows/${showId}`)
			.then((response) => response.json())
			.then((data) => setShow(data))
			.catch((error) => console.log(error));
	}, [showId]);

	const navigateToTicketBookingForm = (showId) => {
		navigate(`/booking/${showId}`);
	};

	const formatDate = (date) => {
		const [year, month, day] = date.split('-');
		return `${month}-${day}-${year}`;
	}

	return (
		<main className="show-details-page container mb-5">
			<img className="show-image mt-4" src={show?.image?.original} alt={show?.name} />
			<h2 className="my-4"><a className="link" target="_blank" rel="noreferrer"  href={show?.officialSite}>{show?.name}</a></h2>
			{show ? (
				<div>
					<p className="card-text">
						<strong>Genres: </strong>
						{show.genres.map((genre, index) => (
							<span key={genre}>{genre}{index !== show.genres.length - 1 && ', '}</span>
						))}
					</p>
					<p>
						<strong>Premiered On: </strong>
						{formatDate(show.premiered)}
					</p>
					<p className="card-text">
						<strong>Language: </strong>
						{show.language}
					</p>
					{show.rating.average && (
						<p className="card-text">
							<strong>Rating: </strong>
							{show.rating.average}
						</p>
					)}
					{show?.officialSite &&<p className="card-text link">
						<strong>Network Official Site: </strong>
						 <a target="_blank" rel="noreferrer" href={show?.officialSite}>{show?.officialSite}</a>
					</p>}
					<p className="card-text">
						<strong>Runtime: </strong>
						{show.averageRuntime} minutes
					</p>
					<p>
						<strong>Type: </strong>
						{show.type}
					</p>
					<div dangerouslySetInnerHTML={{ __html: show.summary }} />
				</div>
			) : (
				<p>Loading show details...</p>
			)}
			<button type="button" className="btn btn-info booktickets" onClick={() => navigateToTicketBookingForm(show.id)}>Book a Movie Ticket</button>
		</main>
	)
}

export default ShowDetails
