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
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    const urls = [
      "https://pokeapi.co/api/v2/pokemon/25",
      "https://pokeapi.co/api/v2/pokemon/26",
      "https://pokeapi.co/api/v2/pokemon/27",
      "https://pokeapi.co/api/v2/pokemon/28",
      "https://pokeapi.co/api/v2/pokemon/30",
      "https://pokeapi.co/api/v2/pokemon/40",
      "https://pokeapi.co/api/v2/pokemon/50",
      "https://pokeapi.co/api/v2/pokemon/70",
      "https://pokeapi.co/api/v2/pokemon/34",
      "https://pokeapi.co/api/v2/pokemon/2",
      "https://pokeapi.co/api/v2/pokemon/90",
      "https://pokeapi.co/api/v2/pokemon/19"
    ];

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
      setIsLoaded(true)
    }).catch((error) => {
      setIsError(true)
      console.log(error)
    })


  }, [])


  if (isError) {
    return (
      <div className="app">
        <Error />
      </div>
    )
  }

  function handleClick(e) {
    const charactersCopy = characters.slice();
    const [target] = charactersCopy.filter(character => {
      if (character.id === +e.currentTarget.getAttribute('data-id')) {
        return character;
      }
    });

    setCharacters(charactersCopy);
    shuffle(charactersCopy);
    setCharacters(charactersCopy);

    if (target.visited === false) {
      target.visited = true;
      setScore(score + 1);
    } else {
      setBestScore(score);
      setScore(0);
      const charactersCopy = characters.slice()
      charactersCopy.map(character => character.visited = false);
      setCharacters(charactersCopy)
    }

    if(score === characters.length - 1){
      setBestScore(score + 1);
      setScore(0);
      const charactersCopy = characters.slice()
      charactersCopy.map(character => character.visited = false);
      setCharacters(charactersCopy)
    }
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
