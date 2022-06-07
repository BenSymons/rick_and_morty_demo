import './App.css';
import {useEffect, useState} from "react"
import axios from 'axios';
import Card from './components/Card';
import PageButtons from './components/PageButtons';

function App() {
  const [characters, setCharacters] = useState()
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [status, setStatus] = useState('all')

  useEffect(() => {
    const statusQuery = `&status=${status}`
    axios.get(`https://rickandmortyapi.com/api/character?page=${page}${status !== 'all' && statusQuery}`)
    .then(res => {
      setCharacters(res.data)
      setLoading(false)
    })
  }, [page, status])

  console.log({characters})

  const handleStatus = (status) => {
    setStatus(status)
  }

  console.log(status, "<-- status")

  return (
    <div className="App">
      <h1>Rick and Morty Characters</h1>
      <p>Status= {status}</p>
      <div>
        <button onClick={() => handleStatus('alive')}>alive</button>
        <button onClick={() => handleStatus('dead')}>dead</button>
        <button onClick={() => handleStatus('all')}>all</button>
      </div>
      {!loading && characters.results.map(character => {
        return <Card character={character}/>
      })}
      <div>
        <form>
          <label htmlFor="name">name</label>
        </form>
      </div>
      <PageButtons page={page} setPage={setPage}/>
    </div>
  );
}

export default App;
