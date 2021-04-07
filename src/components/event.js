import useFirestore from "./hooks/useFirestore";
import "./styles/event.css";
import { useState } from "react";
import image from "../assets/EventCalendar.png"
import Customnav from "./customnavbar";
import team from "../assets/team.jpg";
import { BsCalendar } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import Card from './Card'
import jsonData from './cardData.json'
import ReactPaginate from "react-paginate";
const Events = () => {
  const [searchValue, setSearchValue] = useState('')
  const [card , setCard]= useState(jsonData)
  const [page, setPage] = useState(0)
  const cardperpage = 5
  const pageVisited = page * cardperpage
  const displayCard = card.filter((item)=>{
  if(searchValue===''){
    return item;
  }else if(item.title.toLowerCase().includes(searchValue.toLowerCase()) || item.category.toLowerCase().includes(searchValue.toLowerCase())){
    return item;
  }
}).slice(pageVisited, pageVisited + cardperpage).map(item =>{
  
  return(
  <Card
    image={item.image}
    title={item.title}
    category={item.category}
    info={item.info}
    date={item.date}
    time={item.time}
    btn={item.btn}
  />)
})
const pageCount = Math.ceil(card.length / cardperpage)
const changePage =({selected}) =>{
setPage(selected)
}

  return (
    <div className="events ">
      <div className="event__home1">
        <Customnav color="" height="50px" padding="5vh" />
        <div className="events__cardOutline">
          <div className="events__upcomingCard">
            <img src={team} alt="thumbnail" />
            <div className="events__upcomingCardinfo">
              <button className="events__upcomingCard-btn1">
                Register Now
              </button>
              <h2>Heading of the event</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                suscipit temporibus, eaque qui corrupti corporis{" "}
              </p>
              <button className="events__upcomingCard-btn2">Category</button>
              <div className="events__upcomingCardTiming">
                <BsCalendar className="events__upcomingCardIcon" />
                <div className="events__upcomingCardTime">
                  <p>Date: 21stJan,2021</p>
                  <p>Time: 4:00pm - 5:00pm</p>
                </div>
              </div>
            </div>
          </div>
          <div className="event__info">
            <div className="event__infoSvg">
              <img src={image} alt="png" />
            </div>
            <div className="event__infoText">
              <h4>
                Codefolw believes that the best learning curve for
                any great lesson is achieved by Learning-By-Doing
                technique.Therefore we organise various events to cultivate
                basic learning spirit in students
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="events__home2">
        <div className="event__home2Container">
          <div className="events__search">
            <GoSearch className='events__searchIcon' />
          <input type="search" placeholder='Search events by their name and category...' value={searchValue} 
          onChange={
           e=> setSearchValue(e.target.value)
          }/>
          </div>
          <div className="events__cards">
            {
              displayCard
            }
</div>
         <ReactPaginate
         previousLabel={"Previous"}
         nextLabel={"Next"}
         pageCount={pageCount}
         onPageChange={changePage}
         containerClassName={"paginateBtn"}
         previousLinkClassName={'previousBtn'}
         nextLinkClassName={'nextBtn'}
         activeClassName={'paginateActive'}
         />
        </div>
      </div>
    </div>
  );
};

export default Events;