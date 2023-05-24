import React from 'react'
import './selectionPage.css'

export default function SelectionPage(props) {
    let { id, name } = props;
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
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque dolore aclassName=ccusamus nihil officia veniam a, vitae ea esse ut, architecto repellat est ex fuga, animi non? Facilis beatae asperiores consequatur consectetur iusto quasi labore ea natus cum exercitationem. Perferendis cum exercitationem eveniet debitis eos culpa amet earum ducimus odit labore, natus rerum voluptatemz Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, laudantium.
                    </div>
                </div>

                <div className="right-div">
                    <div className='heading'>JobJob Game</div>

                    <div className="question-div">
                        <h1>Congratulations !!!</h1>
                    </div>
                </div>

                <div className="ans-div">
                    {/* <h1>Dear {name} </h1> */}
                    <h1>Dear XYZ </h1>
                    <h2>We are excited to tell you have been selected for the job !!!</h2>
                    <br />
                    <h2>Candidate ID</h2>
                    {/* <h3>{id}</h3> */}
                    <h3>235RT90AXC</h3>
                </div>

            </div>
        </>
    )
}