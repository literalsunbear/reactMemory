import Tilt from 'react-parallax-tilt'
const Card = props => {
    return(
        <Tilt
        tiltReverse={true}
        glareEnable={true}
        scale={1.1}
        transitionSpeed={600}>
            <div
            className='card'
            id={props.flavor}
            alt={props.flavor}
            onClick={()=>{props.handleClick(props.flavor)}}>
                <img
                src={props.imgURL}
                alt={props.flavor}></img>
            </div>
        </Tilt>
    )
}
export default Card