import React from 'react'
import './startpage.css'

export default function StartPage(props) {
    let { playerName, desc, lobbycode, id } = props;
    return (
        <>
            <div className="main-div">
                <div className='player-div'>
                    <div className='top-div'>
                        <div className="sub-top">
                            {/* <h1>{playerName}</h1> */}
                            <h2 style={{color:'whitesmoke'}}>Player Name</h2>
                        </div>
                    </div>
                    {/* <div className="about">{desc}</div> */}
                    <div className="about">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque dolore aclassName=ccusamus nihil officia veniam a, vitae ea esse ut, architecto repellat est ex fuga, animi non? Facilis beatae asperiores consequatur consectetur iusto quasi labore ea natus cum exercitationem. Perferendis cum exercitationem eveniet debitis eos culpa amet earum ducimus odit labore, natus rerum voluptatemz Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, laudantium.
                    </div>
                </div>

                <div className="right-div">
                    <div className='heading'>JobJob Game</div>
                    <div className="info">
                    {/* <div className="">{id}</div> */}
                        {/* <div className='id-div'>Your Candidate ID is {id}</div> */}
                        <div className='id-div'>Your Candidate ID is 889076</div>
                    </div>

                    <button className='btn1'>Start Game</button>
                    <button className='btn2'>Leave Lobby</button>
                </div>
            </div>
        </>
    )
}