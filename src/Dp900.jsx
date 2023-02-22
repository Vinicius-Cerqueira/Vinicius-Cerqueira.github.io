import { useState } from 'react'
import data from './jsonDataDp900.json'
import './App.css'

function Dp900() {
    const [clicked, setClicked] = useState([])
    const [notClicked, setNotClicked] = useState(data)

    const removeQuestion = (a) => {
        setNotClicked(notClicked.filter((question) => question.URL != a.URL))
    }
    return (
        <>
            <div className="App">
                {notClicked.map((a) => {
                    return <a key={a.URL} className='not-clicked' href={a.URL} target="_blank" onClick={() => { setClicked([...clicked, a]); removeQuestion(a) }}> T1 Q{a.Question} </a>
                })}
            </div>
            <div>

                <h1>Questões Resolvidas</h1>
                {clicked.map((a) => {
                    return <a key={a.URL} className='clicked' href={a.URL} target="_blank"> T1 Q{a.Question} </a>
                })
                }
            </div>
        </>
    )
}

export default Dp900
