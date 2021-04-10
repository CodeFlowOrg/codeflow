import React from "react";
import "./styles/upcommingevent.css";
import calendar from "../assets/calendar.png";
function UpCommingEvent() {
  return (
    <div id="up-coming-events">
      <div id="event-thumbnail">
        <p>(Thumbnail)</p>
      </div>
      <div id="event-details">
        <button type="submit">Register Now</button>
        <div>
          <h2>Heading Of The Event</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
            magnam ea iure nam, dolor voluptas reiciendis enim, quia, aliquid
            doloremque officia aut.
          </p>
        </div>
        <button id="category-button">Category</button>
        <div id="event-venue">
          <div>
          <img src={calendar} alt="calendar-icon" />
          <div>
            <h6>Date:27th Jan,2021</h6>
            <h6>Time:4:00pm-5:00pm</h6>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpCommingEvent;
