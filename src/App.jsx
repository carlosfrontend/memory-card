import { useEffect, useState } from 'react'
import './App.css'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Header from './components/Header'
import Loader from './components/Loader'
import Error from './components/Error'

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const urls = [
      "https://pokeapi.co/api/v2/pokemon/26",
      "https://pokeapi.co/api/v2/pokemon/500",
      "https://pokeapi.co/api/v2/pokemon/899",
      "https://pokeapi.co/api/v2/pokemon/296",
      "https://pokeapi.co/api/v2/pokemon/30",
      "https://pokeapi.co/api/v2/pokemon/310",
      "https://pokeapi.co/api/v2/pokemon/320",
      "https://pokeapi.co/api/v2/pokemon/412",
      "https://pokeapi.co/api/v2/pokemon/34",
      "https://pokeapi.co/api/v2/pokemon/35",
      "https://pokeapi.co/api/v2/pokemon/90",
      "https://pokeapi.co/api/v2/pokemon/658"
    ];

    const fetchData = urls.map(url => fetch(url, { mode: 'cors' }));
    console.time('Fetching')
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
    console.timeEnd('Fetching')
  }, [])

  if (isError) {
    return (
      <div className="app">
        <Error />
      </div>
    )
  }


  if (isLoaded) {
    return (
      <div className="app">
        <Header text='Memory Game' logoAltText='pokemon logo' />
        <Cards characters={characters} />
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
