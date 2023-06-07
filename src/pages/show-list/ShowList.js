import React, {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';

import './styles.scss';


const ShowList = () => {
	const [shows, setShows] = useState([]);
	let navigate = useNavigate();

	useEffect(() => {
		fetch('https://api.tvmaze.com/search/shows?q=all')
			.then((response) => response.json())
			.then((data) => setShows(data))
			.catch((error) => console.log(error));
	}, []);

	const navigateToShowDetails = (showId) => {
		navigate(`/shows/${showId}`);
	};

	const formatDate = (date) => {
		const [year, month, day] = date.split('-');
		return `${month}-${day}-${year}`;
	}

	return (
		<main className="show-list-page container">
			<h2 className="text-center m-4">Most Viewed TV Series</h2>
			<ul className="shows-list gap-4">
				{shows.map(({show}) => (
					<li className="show-item list-unstyled card" key={show.id}>
						<div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '10px', top:'10px'}}>
					<a target="_blank" rel="noreferrer" href={show?.officialSite}><span className=" badge rounded-pill bg-warning"
								style={{left: '85%', zIndex: '1'}}>{show?.network?.name}</span></a></div>
						<img src={show?.image?.original} className="card-img-top" alt={show.name} />
						<div className="card-body">
							<h5 className="card-title"><a className="link" target="_blank" rel="noreferrer" href={show?.officialSite}>{show.name}</a></h5>
							<p className="card-text">
								<strong>Genres: </strong>
								{show.genres.map((genre, index) => (
									<span className="genre" key={genre}>{genre}{index !== show.genres.length - 1 && ', '}</span>
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

							<button type="button" className="btn btn-dark" onClick={() => navigateToShowDetails(show.id)}>View
								Details
							</button>
						</div>
					</li>
				))}
			</ul>
		</main>
	);
};

export default ShowList;
