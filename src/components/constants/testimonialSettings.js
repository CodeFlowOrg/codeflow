import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SamplePrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <FaChevronLeft
      className={className}
      style={{
        display: "block",
        right: "100px",
        zIndex: "15",
        height: "80px",
        width: "80px",
        opacity: "1",
        color: "#C2C6C5",
        position: "absolute",
        top: "50%",
        left: "-4.5rem",
        margin: "0.5rem",
      }}
      onClick={onClick}
    />
  );
};
const SampleNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <FaChevronRight
      className={className}
      style={{
        display: "block",
        right: "100px",
        zIndex: "15",
        height: "80px",
        width: "80px",
        opacity: "1",
        color: "#C2C6C5",
        position: "absolute",
        top: "50%",
        right: "-4.5rem",
        margin: "0.5rem",
      }}
      onClick={onClick}
    />
  );
};

export const settings = {
  infinite: false,
  speed: 750,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
};
