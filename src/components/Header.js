import background from '../assets/images/header-bg.jpeg'
import title from '../assets/images/header-title.png'
const Header = () => {
    return(
        <div 
        className='header'>
            <img
            src={background}></img>
            <img
            src={title}></img>
        </div>
    )
}
export default Header