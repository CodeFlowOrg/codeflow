import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = ({ name, body, email }) => {
  return (
    <article className="tesimonial-item">
      <div className="testimonial-left">
        <FaQuoteLeft className="quote-icon" />
        <img src="https://via.placeholder.com/150/771796" alt={name} />
      </div>
      <div className="testimonial-right">
        <blockquote className="testimonial-content">{body}</blockquote>
        <p>{name}</p>
        <small>{email}</small>
      </div>
    </article>
  );
};

export default Testimonial;
