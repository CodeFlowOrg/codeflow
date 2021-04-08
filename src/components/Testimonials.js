import Slider from "react-slick";
import { useFetch } from "./hooks/useFetch";
import { settings } from "./constants/testimonialSettings";
import "./styles/testimonials.css";
import Testimonial from "./Testimonial";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Placeholder API
const API_URL = `http://jsonplaceholder.typicode.com/comments?_page=1&_limit=8`;

const Testimonials = () => {
  //Getting testimonials data
  const { data: testimonials, isLoading, isError } = useFetch(API_URL);

  //Loading screen
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <section id="testimonials">
      <h1>Testimonials</h1>
      <div className="testimonial-wrapper">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.id} {...testimonial} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
