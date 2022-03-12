const ScoreBox = props => {
    return(
        <div
        className='score-box'>
            <div className='current-score'>
                <p>CURRENT SCORE:</p>
                <p>{props.currentScore}</p>
            </div>
            <div className='current-score'>
                <p>HIGH SCORE:</p>
                <p>{props.highScore}</p>
            </div>
        </div>
    )
}
export default ScoreBox