import Card from './Card'
const CardGrid = props => {
    const mappedCards = props.cards.map(card => {
        return <Card 
                flavor={card.text}
                handleClick={props.handleClick}
                />    
    })
    return (
        <div
        className='card-grid'>
            {mappedCards}
        </div>
    )
}
export default CardGrid