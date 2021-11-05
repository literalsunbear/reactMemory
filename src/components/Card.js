const Card = props => {
    return(
        <div
        className='card'
        id={props.flavor}
        alt={props.flavor}
        onClick={()=>{props.handleClick(props.flavor)}}>
            <img
            src={props.imgURL}
            alt={props.flavor}></img>
        </div>
    )
}
export default Card