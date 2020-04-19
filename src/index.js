import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const Header = (props) => {

  return (
    <div>
      <h2>{props.text}</h2>
    </div>
  )
}
 

const Button = (props) => {
  return (
<button onClick={props.handleClick}>
    {props.text}
  </button>
  )
}

const Stats = (props) => {

  return (
    <div>
      <table>
        <tbody>
      <tr width="100px">
        <td width="30%"> {props.text} </td> 
        <td> </td> 
        <td width="10%"> {props.value} </td> 
        <td> </td>
        <td width="60%"> {props.trail} </td>
      </tr>
      </tbody>
      </table>
    </div>
  )
}


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)
  const [averageClicks, setAverage] = useState(0)
  const [positiveClicks, setPositive] = useState(0)

  let mainHeader = "give feedback"
  let subHeader ="statistics"
  let subHeader2 ="no feedback given"

  const setToGood = goodValue => {
    setGood(goodValue)
    setAll(allClicks+1)
    setAverage((goodValue-bad)/(allClicks+1))
    setPositive(goodValue/(allClicks+1)*100)
  }
  const setToNeutral = neutralValue => {
    setNeutral(neutralValue)
    setAll(allClicks+1)
    if(allClicks == 0){
      setAverage(0)
    }
    

  }
  const setToBad = badValue => {
    setBad(badValue)
    setAll(allClicks+1)
    setAverage((good-badValue)/(allClicks+1))
    setPositive(good/(allClicks+1)*100)
  }


  if (allClicks == 0){

    return (
      <div>
        <Header text ={mainHeader}/>
        <Button handleClick={()=>setToGood(good+1)} text = "good" ></Button>
        <Button handleClick={()=>setToNeutral(neutral+1)} text ="neutral"></Button>
        <Button handleClick={()=>setToBad(bad+1)} text="bad"></Button>
        <Header text ={subHeader2}/> 
      </div>
    )
  }

  return (
    <div>
      <Header text ={mainHeader}/>
      <Button handleClick={()=>setToGood(good+1)} text = "good" ></Button>
      <Button handleClick={()=>setToNeutral(neutral+1)} text ="neutral"></Button>
      <Button handleClick={()=>setToBad(bad+1)} text="bad"></Button>
      <Header text ={subHeader}/>
      <Stats text={"good"} value = {good} trail = {""}> </Stats>
      <Stats text={"neutral"} value = {neutral} trail = {""}></Stats>
      <Stats text={"bad"} value = {bad} trail = {""}></Stats>
      <Stats text={"all"} value = {allClicks} trail = {""}></Stats>
      <Stats text={"average"} value = {averageClicks} trail = {""}></Stats>
      <Stats text={"positive"} value = {positiveClicks} trail = {"%"}> </Stats>

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)