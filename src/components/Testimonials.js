import React, { useCallback, useEffect, useState } from "react";
import Slider from "react-slick";

var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const API_URL = `http://jsonplaceholder.typicode.com/comments?_page=1&_limit=8`;

const Testimonials = () => {
  //Loading state
  const [isLoading, setIsLoading] = useState(true);
  //Error state
  const [isError, setIsError] = useState(false);

  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(API_URL);

      if (!response.ok) throw new Error(`${response.status} Product not found`);

      const data = await response.json();

      setData(data);

      //Disable loading screen
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  }, [API_URL]);
  useEffect(() => {
    fetchData();
  }, [API_URL, fetchData]);
  console.log(data);
  return (
    <section className="testimonials">
      <h1>Testimonials</h1>
      <Slider {...settings}>
        {data.map((item) => (
          <h2 key={item.id}>{item.name}</h2>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
