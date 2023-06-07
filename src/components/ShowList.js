import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';


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

  // let formattedDate = '';
  // if (show.premiered) {
  //   const premieredDate = show.premiered;
  //   const [year, month, day] = premieredDate.split('-');
  //   formattedDate = `${month}-${day}-${year}`;
  // }


  return (
    <>
    <div>
    <h2>Show List</h2>
      <ul>
        {shows.map((show) => (
          <li key={show.show.id}>
            <h3>{show.show.name}</h3>
            <p>
              Genres: {show.show.genres.map((genre) => (
                <span key={genre}>{genre}</span>
              ))}
            </p>
            {/* {formattedDate && <p>Premiered: {formattedDate}</p>} */}
            <p>Language: {show.show.language}</p>
            {show.show.rating.average && <p>Rating: {show.show.rating.average}</p>}
            {/* Add more show details as needed */}
            <button onClick={() => navigateToShowDetails(show.show.id)}>View Details</button>
          </li>
        ))}
      </ul>
      </div>
    </>
  );
};

export default ShowList;
