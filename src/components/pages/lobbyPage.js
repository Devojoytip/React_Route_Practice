import React from 'react'
import './lobbyPage.css'

export default function LobbyPage(props) {
    let { question } = props;
    return (
        <>
            <div className="main-div">
                <div className='player-div'>
                    <div className='top-div'>
                        <div className="sub-top">
                            {/* <h1>{playerName}</h1> */}
                            <h2 style={{ color: 'whitesmoke' }}>Player Name</h2>
                        </div>
                    </div>
                    {/* <div className="about">{desc}</div> */}
                    <div className="about">
                        
                    </div>
                </div>

                <div className="right-div">
                    <div className='heading'>JobJob Game</div>

                    <div className="question-div">
                        {/* <p>{question}</p> */}
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, facere atque? Sint saepe et, sit voluptate ratione fuga quas officia?</p>
                    </div>
                </div>

                <div className="ans-div">
                    <form action="" method="post">
                        <textarea name="answer" id="" cols="60" rows="15" style={{backgroundColor:'#B3B3B3',fontFamily:'Trebuchet MS', fontSize:'large'}}></textarea>

                        <button type="submit" class="btn">Submit Answer</button>
                    </form>
                </div>

            </div>
        </>
    )
}