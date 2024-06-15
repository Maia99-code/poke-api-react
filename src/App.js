import "./App.css";
import PokemonFetcherApi from "./components/PokemonFetcherApi";

function App() {
  return (
    <>
      <div className="App">
        <h1>Pokémon Fetcher</h1>
        <PokemonFetcherApi />
      </div>
    </>
  );
}

export default App;
