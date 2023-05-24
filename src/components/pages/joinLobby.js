import React from 'react'
import './joinlobby.css'

export default function JoinLobby() {
    return (
        // <>
        //         <div className='form-div'>
        //             <form action="" method="post">
        //             <h1>JobJob Game</h1>
        //                 <div className="code-div">
        //                 <input type="text" className='name-input' placeholder='Enter Code' name='code' id='code' />
        //                 </div>
        //                 <button className='btn1'>Join</button>
        //                 <br />
        //                 <br />
        //                 <button className='btn2'>Go Back</button>
        //             </form>
        //         </div>
        // </>

        <>
            <div className="main-div">
                <div className='player-div'>
                    <div className='top-div'>
                        <div className="sub-top">
                            <h2 style={{color:'whitesmoke',textAlign:'center'}}>Rules</h2>
                        </div>
                    </div>
                    <div className="rules">
                        <ol>
                            <li>
                                <h3>Click on Start Game to take test.</h3>
                            </li>
                            <br />
                            <li>
                                <h3>Once started , the game can't be paused.</h3>
                            </li>
                            <br />
                            <li>
                                <h3>Answering all the questions is mandatory.</h3>
                            </li>
                        </ol>
                    </div>
                </div>

                <div className="right-div">
                    <div className='heading'>JobJob Game</div>
                    <div className="info">
                        <form action="post" id='f1'>
                        <div className="inp-div">
                        <input type="text" className='name-input' placeholder='Enter Code' name='code' id='code' />
                        </div>
                        </form>
                    </div>

                    <button className='btn1' form='f1'>Join Lobby</button>
                    <br />
                    <button className='btn2'>Go back</button>
                </div>
            </div>
        </>
    )
}
