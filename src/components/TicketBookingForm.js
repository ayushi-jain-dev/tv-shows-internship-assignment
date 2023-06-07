import React, { useState } from "react";

const TicketBookingForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const showId = "...";
  const movieName = "...";

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    // Store user details in local storage
    const userDetails = {
      name: name,
      email: email,
      showId: showId,
    };
    localStorage.setItem("userDetails", JSON.stringify(userDetails));

    // Reset form fields
    setName("");
    setEmail("");
  };

  return (
    <div>
      <h2>Ticket Booking Form</h2>
      <h3>Movie Name: {movieName}</h3>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TicketBookingForm;
