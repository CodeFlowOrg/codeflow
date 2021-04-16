import React from 'react'
import styled from 'styled-components'

const Card = () => {
    return (
        <ContactStyle>
            <Hide style={ { color: 'white' } }>
                Connect on Social Media
            </Hide>
            <div style={ { display: 'flex', alignItems: 'center', justifyContent: "center" } }>
                <Hide>
                    <Social >
                        <div className='social-btn flex-center' >
                            <img src="https://img.icons8.com/fluent/240/000000/github.png" alt="not available"/>
                            <span> 
                                <a href="https://github.com/codeflow201" target="_blank" rel="noreferrer">
                                    Codeflow
                                </a>
                            </span>
                        </div>
                    </Social>
                </Hide>
                <Hide>
                    <Social>
                        <div className='social-btn flex-center' id="linkedin">
                            <img src="https://img.icons8.com/fluent/96/000000/linkedin.png" alt="not available"/>
                            <span> 
                                <a 
                                href="https://www.linkedin.com/company/codefloworg/" 
                                target="_blank"
                                rel="noreferrer"
                                >
                                    Codeflow
                                </a>
                            </span>
                        </div>
                    </Social>
                </Hide>
                <Hide>
                    <Social>
                        <div className='social-btn flex-center'>
                            <img src="https://img.icons8.com/doodle/96/000000/youtube-play--v2.png" alt="not available"/>
                            <span> 
                                <a
                                href="https://www.youtube.com/channel/UCIsECRBRWOalTC51co-tJWg"
                                target="_blank"
                                rel="noreferrer">
                                    Codeflow
                                </a>
                            </span>
                        </div>
                    </Social>
                </Hide>
                <Hide>
                    <Social>
                        <div className='social-btn flex-center' >
                            <img src="https://img.icons8.com/color/240/000000/telegram-app--v1.png" alt="not available"/>
                            <span>
                                <a href="https://t.me/joinchat/FdJhyMumJK5sryCv" target="_blank" rel="noreferrer">Codeflow</a>
                            </span>
                        </div>
                    </Social>
                </Hide>
                <Hide>
                    <Social>
                        <div className='social-btn flex-center'>
                            <img src="https://img.icons8.com/color/48/000000/twitter--v2.png" alt="not available"/>
                            <span> 
                                <a href="https://twitter.com/codefloworg" target="_blank" rel="noreferrer">Codeflow</a>
                            </span>
                        </div>
                    </Social>
                </Hide>
            </div>

        </ContactStyle>
    )
}
const ContactStyle = styled.div`
  padding: 0.5rem 10rem;
  color: #353535;
  min-height: 90vh;

`;

const Hide = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const Social = styled.div`
  display: flex;
  align-items: center;
  
  
  h2 {
    margin: 2rem;
    text-decoration: none;
  }
   img{
      width: 8vh;
      
  }
  a{
      text-decoration: none;
      color: #333;
  }
  .social-btn {
    cursor: pointer;
	height: 50px;
	width: 50px;
	font-family: 'Titillium Web', sans-serif;
	color: #333;
	border-radius: 10px;
	box-shadow: 0px 10px 10px rgba(0,0,0,0.1);
	background: white;
	margin: 5px;
    transition: 1s;
    
}
.flex-center {
	display: flex;
	justify-content: center;
	align-items: center;
}
.social-btn span {
	width: 0px;
	overflow: hidden;
	transition: 1s;
	text-align: center;
}
.social-btn:hover {
	width: 150px;
	border-radius: 5px;
}
.social-btn:hover span {
	padding: 2px;
	width: max-content;
}
#linkedin svg {
	fill: #0e76a8;
}
#github {
	fill: #333;
}
`;
export default Card;