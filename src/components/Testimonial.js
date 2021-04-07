const Testimonial = ({ name, body, email }) => {
  return (
    <article className="tesimonial-item">
      <div className="left">
        <img src="" alt="" />
      </div>
      <div className="right">
        <div className="testimonial-content">{body}</div>
        <h3>{name}</h3>
        <p>Hi</p>
        <p>{email}</p>
      </div>
    </article>
  );
};

export default Testimonial;
