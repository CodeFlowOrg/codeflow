import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import { Button } from './ButtonStyles';

const ScrollToTopButton = () => {

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	setVisible(true)
	}
	else if (scrolled <= 300){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	});
};

window.addEventListener('scroll', toggleVisible);

return (
	<Button>
        <FaArrowCircleUp onClick={scrollToTop}
        style={{display: visible ? 'inline' : 'none'}} />
	</Button>
);
}

export default ScrollToTopButton;
