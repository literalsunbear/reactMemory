import background from '../assets/images/header-bg.jpeg'
import title from '../assets/images/header-title.png'
const Header = () => {
    return(
        <div 
        className='header'>
            <h1>MEMORY TIME</h1>
            <img
            src={background}
            alt='Jake The Dog reading a book'></img>
        </div>
    )
}
export default Header