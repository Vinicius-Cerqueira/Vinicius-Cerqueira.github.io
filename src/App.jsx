import { useState } from 'react'
import './App.css'

function App(props) {

  const [clicked, setClicked] = useState([])
  const [notClicked, setNotClicked] = useState(props.data.questions)

  const removeQuestion = (a) => {
    setNotClicked(notClicked.filter((question) => question.link != a.link))
  }
  return (
    <div className='container'>

      <div className="questions">

        {notClicked.map((a) => {
          return <a key={a.link} className='clicked' href={a.link} target="_blank" onClick={() => { setClicked([...clicked, a]); removeQuestion(a) }}> {a.number} </a>
        })}
      </div>
      <div className="questions">
        <p>Resolvidas</p>
        {clicked.map((a) => { return <a key={a.link} className='clicked' href={a.link} target="_blank"> {a.number} </a> })}
      </div>
    </div>
  )
}

export default App
