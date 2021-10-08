import Slider from "react-slick";
import { useFetch } from "../hooks/useFetch";
import { settings } from "../constants/testimonialSettings";
import "../styles/testimonials.css";
import Testimonial from "./Testimonial";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Placeholder API
const API_URL = `http://jsonplaceholder.typicode.com/comments?_page=1&_limit=8`;

const Testimonials = () => {
  //Getting testimonials data
  const { data: testimonials, isLoading } = useFetch(API_URL);

  return (
    <section id="testimonials">
      <h1> <span style={{color:'#4A403A'}}>Our</span> Testimonials</h1>
      <div className="testimonial-wrapper">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <Testimonial key={testimonial.id} {...testimonial} />
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
