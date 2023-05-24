import React from 'react'
import './resultPage.css'
export default function ResultPage(props) {
    let { q1_score, q2_score } = props;
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
                    <div className="q1">
                        <h1>Question 1</h1>
                        <h2>Your Score : {q1_score} </h2>
                    </div>
                    <div className="q2">
                        <h1>Question 2</h1>
                        <h2>Your Score : {q2_score} </h2>
                    </div>
                </div>

                <div className="right-div">
                    <div className='heading'>JobJob Game</div>

                    <div className="feedback-div">
                        <form action="" method="post">
                            <h1 style={{textAlign:'center'}}>Rate your Experience</h1>
                            {/* <p>How was the difficulty level for Q1 ?</p>
                            <input type="radio" id="html" name="qu1" value="easy" />
                           <label for="html">Easy</label>
                           <input type="radio" id="css" name="qu1" value="moderate" />
                            <label for="css">Moderate</label>
                            <input type="radio" id="javascript" name="qu1" value="hard" />
                            <label for="javascript">Hard</label>
                            
                            <p>How was the difficulty level for Q2 ?</p>
                            <input type="radio" id="html" name="qu2" value="easy" />
                           <label for="html">Easy</label>
                           <input type="radio" id="css" name="qu2" value="moderate" />
                            <label for="css">Moderate</label>
                            <input type="radio" id="javascript" name="qu2" value="hard" />
                            <label for="javascript">Hard</label> */}

                            <div className='qu1-div'>
                                <p>How was the difficulty level for Q1 ?</p>
                                <input type="radio" id="easy1" name="qu1" value="easy" />
                                <label for="easy1">Easy</label> &nbsp;
                                <input type="radio" id="mod1" name="qu1" value="moderate" />
                                <label for="mod1">Moderate</label> &nbsp;
                                <input type="radio" id="hard1" name="qu1" value="hard" />
                                <label for="hard1">Hard</label> &nbsp;
                            </div>

                            <div className='qu2-div'>
                            <p>How was the difficulty level for Q2 ?</p>
                            <input type="radio" id="easy" name="qu2" value="easy" />
                            <label for="easy">Easy</label> &nbsp;
                            <input type="radio" id="mod2" name="qu2" value="moderate" />
                            <label for="mod2">Moderate</label> &nbsp;
                            <input type="radio" id="hard2" name="qu2" value="hard" />
                            <label for="hard2">Hard</label>
                            </div>

                            <div className="suggest-div">
                            <textarea name="" id="" cols="56" rows="8" placeholder='Your Suggestions' style={{backgroundColor:'rgb(237, 232, 232)',fontSize:'larger'}}></textarea>
                            </div>

                            <button type="submit" class="btn">Submit Answer</button>
                        </form>
                    </div>

                </div>

            </div>
        </>
    )
}