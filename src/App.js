import {useState} from 'react'
import cardList from './assets/cardList'
import CardGrid from './components/CardGrid'
import ScoreBox from './components/ScoreBox'
import Header from './components/Header'
import './App.css';

const App = ()=> {
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [cards, setCards] = useState(cardList)
  const [clickedCards, setClickedCards] = useState([])
  
  // the durstenfeld shuffle courtesy of 
  // laurens holst on stackoverflow
  function shuffleCards() {
    const tempArr = cards
    for (var i = tempArr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = tempArr[i];
        tempArr[i] = tempArr[j];
        tempArr[j] = temp;
    }
    setCards(tempArr)
    console.log('shuffled the cards')
    console.log(cards)
  }
  const handleClick = (card) => {
    shuffleCards()
    playRound(card)
  }
  function playRound(card) {
    if(!clickedCards.includes(card)) {
      const tempArr = clickedCards
      tempArr.push(card)
      setClickedCards(tempArr)
      setScore(score + 1)
    } else {
      restartRound()
    }
  }
  const restartRound = () => {
    alert(`aw dang, you already clicked that. try to beat ${score} this time!`)
    setHighScore(score)
    setScore(0)
    const tempArr = []
    setClickedCards(tempArr)
  }
  return (
    <>
    <Header/>
    <ScoreBox 
      currentScore={score}
      highScore={highScore}
    />
    <CardGrid
      handleClick={handleClick}
      cards={cards}
    />
    </>
  )
}

export default App;
