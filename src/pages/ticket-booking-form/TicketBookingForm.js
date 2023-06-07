import React, {useEffect, useState} from "react";

import "./styles.scss";
import {useParams} from "react-router-dom";

const TicketBookingForm = () => {
	const [show, setShow] = useState(null);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [contact, setContact] = useState("");

	let {showId} = useParams();

	useEffect(() => {
		fetch(`https://api.tvmaze.com/shows/${showId}`)
			.then((response) => response.json())
			.then((data) => setShow(data))
			.catch((error) => console.log(error));
	}, [showId]);

	const handleSubmit = (event) => {
		event.preventDefault();
		// Handle form submission
		// Store user details in local storage
		const userDetails = {
			name: name,
			email: email,
			contact: contact,
			showId: showId,
		};
		localStorage.setItem("userDetails", JSON.stringify(userDetails));

		// Reset form fields
		setName("");
		setEmail("");
		setContact("");
	};

	return (
		<main className="ticket-booking-form-page container my-5">
			<h2 className="mb-3">Book Tickets</h2>
			<p>
				<strong>Movie Name: </strong>
				{show?.name}</p>
			{show?.rating.average && (
				<p>
					<strong>Rating: </strong>
					{show?.rating.average}
				</p>
			)}
			{show?.schedule?.time && (
				<p>
					<strong>Time: </strong>
					{show?.schedule?.time}
				</p>
			)}
			{show?.schedule?.days && (
				<p>
					<strong>Day: </strong>
					{show?.schedule?.days}
				</p>
			)}
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="name"><strong>Name:</strong></label>
					<input
						type="text"
						id="name"
						className="form-control my-3"
						value={name}
						onChange={(event) => setName(event.target.value)}
						required
					/>
				</div>

				<div className="form-group">
					<label htmlFor="email"><strong>Email:</strong></label>
					<input
						type="email"
						id="email"
						placeholder="example@info.com"
						className="form-control my-3"
						value={email}
						onChange={(event) => setEmail(event.target.value)}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="contact"><strong>Contact Number:</strong></label>
					<input
						type="tel"
						pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
						placeholder="1234-45-6789"
						id="contact"
						className="form-control my-3"
						value={contact}
						onChange={(event) => setContact(event.target.value)}
						required
					/>
				</div>

				<button type="submit" className="btn btn-info">
					Submit
				</button>
			</form>
		</main>
	);
};

export default TicketBookingForm;
