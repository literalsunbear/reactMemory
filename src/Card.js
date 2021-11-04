const Card = props => {
    return(
        <div
        className='card'
        onClick={()=>{props.handleClick(props.flavor)}}>
            <p>{props.flavor}</p>
        </div>
    )
}
export default Card