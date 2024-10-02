import { useEffect, useState } from 'react'
import './App.css'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Header from './components/Header'
import Loader from './components/Loader'
import Error from './components/Error'
import { shuffle } from './AuxiliaryFunctions/shuffle'

function App() {

  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [myError, setMyError] = useState('');
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {

    // LEVEL MANAGEMENT

    let pokemonsIds = [];
    const FROM = 20;
    const TO = 31;

    for (let i = FROM; i <= TO; i++) {
      pokemonsIds.push(i);
    }

    // END LEVEL MANAGEMENT

    shuffle(pokemonsIds)

    const urls = pokemonsIds.map(id => `https://pokeapi.co/api/v2/pokemon/${id}`);

    const fetchData = urls.map(url => fetch(url, { mode: 'cors' }));

    Promise.all(fetchData).then(responses => Promise.all(responses.map(response => {
      if (!response.ok) {
        throw new Error('Not response from server!')
      } else {
        return response.json();
      }

    }))).then(data => {
      const pokemons = data.map(pokemon => ({
        id: pokemon.id,
        name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.substring(1),
        imageUrl: pokemon.sprites['other']['official-artwork']['front_default'],
        visited: false
      }))
      setCharacters(pokemons);
      setIsLoaded(true);
    }).catch((error) => {
      setIsError(true);
      setMyError(error.message);
    })

  }, []);




  function handleClick(e) {
    const charactersCopy = characters.slice();
  
    const target = charactersCopy.find(el => el.id === +e.currentTarget.getAttribute('data-id'));
    shuffle(charactersCopy);
    setCharacters(charactersCopy);

    if (target.visited === false) {
      setScore(score + 1)
      target.visited = true;
    } else {
      setBestScore(score);
      setScore(0);
      charactersCopy.map(el => el.visited = false);
      setCharacters(charactersCopy);
      shuffle(charactersCopy);
      if (score < bestScore) {
        const bestScoreCopy = bestScore;
        setBestScore(bestScoreCopy);
        charactersCopy.map(el => el.visited = false);
        shuffle(charactersCopy);
        setCharacters(charactersCopy);
      }
    }

  }


  useEffect(() => {
    const wasAllVisited = characters.every(el => el.visited === true);

    function updateBestScore(wasAllVisited) {
      if (wasAllVisited === true) {
        let scoreCopy = score;
        if (score === characters.length) {
          setScore(0);
          setBestScore(scoreCopy);
          characters.map(el => el.visited = false);
          shuffle(characters);
          setCharacters(characters);
        } else if (score > bestScore) {
          setBestScore(scoreCopy);
        }

      }
      return () => setScore((score) => score + 1)
    }
    updateBestScore(wasAllVisited);

  }, [characters, score, bestScore,]);



  if (isError) {
    return (
      <div className="app">
        <Error myError={myError} />
      </div>
    )
  }



  if (isLoaded) {
    return (
      <div className="app">
        <Header score={score} bestScore={bestScore} text='Memory Game' logoAltText='pokemon logo' />
        <Cards characters={characters} handleClick={handleClick} />
        <Footer />
      </div>
    )
  }
  return (
    <div className="app">
      <Loader />
    </div>
  )
}

export default App
