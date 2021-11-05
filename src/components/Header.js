import ScoreBox from './ScoreBox'
import background from '../assets/images/header-bg.jpeg'
const Header = props => {
    return(
        <div 
        className='header'>
            <ScoreBox 
            currentScore={props.currentScore}
            highScore={props.highScore}/>
            <h1>MEMORY TIME</h1>
            <img
            src={background}
            alt='Jake The Dog reading a book'></img>
        </div>
    )
}
export default Header