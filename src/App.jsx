import { useState } from 'react'
import './App.css'

function App(props) {

  const [clicked, setClicked] = useState([])
  const [notClicked, setNotClicked] = useState(props.data)

  const removeQuestion = (a) => {
    setNotClicked(notClicked.filter((question) => question.Address != a.Address))
  }
  return (
    <>
      <table>
        <tr>
          <th>Question</th>
          <th>Link</th>
        </tr>

        {notClicked.map((a) => {
          return <tr key={a.Address} className='not-clicked'>
            <td>Topic {a.Topic} Question {a.Question}</td>
            <td><a href={a.Address} target="_blank" onClick={() => { setClicked([...clicked, a]); removeQuestion(a) }} > {a.Address} </a></td>
          </tr>
        })}

      </table>
      {/* <div className="App">
        {notClicked.map((a) => {
          return <a key={a.Address} className='not-clicked' href={a.Address} target="_blank" onClick={() => { setClicked([...clicked, a]); removeQuestion(a) }}> T{a.Topic} Q{a.Question} </a>
        })}
      </div>
      <div>

        <h1>Questões Resolvidas</h1>
        {clicked.map((a) => { return <a key={a.Address} className='clicked' href={a.Address} target="_blank"> T{a.Topic} Q{a.Question} </a> })}
      </div> */}
    </>
  )
}

export default App
