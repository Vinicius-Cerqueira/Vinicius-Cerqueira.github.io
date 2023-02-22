import { useState } from 'react'
import data from './jsonDataPl300.json'
import './App.css'

function Pl300() {
  const [clicked, setClicked] = useState([])
  const [notClicked, setNotClicked] = useState(data)

  const removeQuestion = (a) => {
    setNotClicked(notClicked.filter((question) => question.Address != a.Address))
  }
  return (
    <>
      <div className="App">
        {notClicked.map((a) => {
          return <a key={a.Address} className='not-clicked' href={a.Address} target="_blank" onClick={() => { setClicked([...clicked, a]); removeQuestion(a) }}> T{a.Topic} Q{a.Question} </a>
        })}
      </div>
      <div>

        <h1>Questões Resolvidas</h1>
        {clicked.map((a) => {
          return <a key={a.Address} className='clicked' href={a.Address} target="_blank"> T{a.Topic} Q{a.Question} </a>
        })
        }
      </div>
    </>
  )
}

export default Pl300
