import { useState } from 'react'
import './App.css'

function App(props) {

  const [clicked, setClicked] = useState([])
  const [notClicked, setNotClicked] = useState(props.data.questions)

  const removeQuestion = (a) => {
    setNotClicked(notClicked.filter((question) => question.link != a.link))
  }
  return (
    <>
      <table>
        <tr>
          <th>Question</th>
          <th>Link</th>
        </tr>

        {notClicked.map((a) => {
          return <tr key={a.link} className='not-clicked'>
            <td>{a.question}</td>
            <td><a href={a.link} target="_blank" onClick={() => { setClicked([...clicked, a]); removeQuestion(a) }} > {a.link} </a></td>
          </tr>
        })}

      </table>
      {/* <div className="App">
        {notClicked.map((a) => {
          return <a key={a.link} className='not-clicked' href={a.link} target="_blank" onClick={() => { setClicked([...clicked, a]); removeQuestion(a) }}> T{a.Topic} Q{a.Question} </a>
        })}
      </div>
      <div>

        <h1>Questões Resolvidas</h1>
        {clicked.map((a) => { return <a key={a.link} className='clicked' href={a.link} target="_blank"> T{a.Topic} Q{a.Question} </a> })}
      </div> */}
    </>
  )
}

export default App
