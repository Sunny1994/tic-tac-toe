import logo from './logo.svg';
import React, {useState} from 'react'
import Icon from "./Components/Icon"


import {ToastContainer, toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import {Card, CardBody, Container, Button, Col, Row} from "reactstrap"
import "bootstrap/dist/css/bootstrap.css"
import "./App.css"

const Arrayitem= new Array(9).fill("empty")

function App() {

  const[isCross, setIsCross]= useState(false)
  const[winmessage, setWinmessage]= useState("")
  const[countme, setCountme]=useState(0)

  const reload =()=>{
setIsCross(false)
setWinmessage("")
setCountme(0)
Arrayitem.fill("empty", 0, 9)
  }

  const checkwinner=()=>{
  if(Arrayitem[0]=== Arrayitem[1] && Arrayitem[0]===Arrayitem[2] && Arrayitem[0]!=="empty"){
    setWinmessage(`${Arrayitem[0]} wins`)
  }
  else{
    setCountme(countme+1)
  }
  
  if(Arrayitem[3]=== Arrayitem[4] && Arrayitem[3]===Arrayitem[5] && Arrayitem[3]!=="empty"){
  setWinmessage(`${Arrayitem[3]} wins`)
  }
  else{
    setCountme(countme+1)
  }
  if (Arrayitem[6]=== Arrayitem[7] && Arrayitem[6]===Arrayitem[8] && Arrayitem[6]!=="empty"){
    setWinmessage(`${Arrayitem[6]} wins`)
  }  else{
    setCountme(countme+1)
  }
  if(Arrayitem[2]=== Arrayitem[4] && Arrayitem[2]===Arrayitem[6] && Arrayitem[2]!=="empty"){
    setWinmessage(`${Arrayitem[2]} wins`)
  }  else{
    setCountme(countme+1)
  }

  if(Arrayitem[0]=== Arrayitem[4] && Arrayitem[0]===Arrayitem[8] && Arrayitem[0]!=="empty"){
    setWinmessage(`${Arrayitem[0]} wins`)
  }  else{
    setCountme(countme+1)
  }
  if(Arrayitem[0]=== Arrayitem[3] && Arrayitem[0]===Arrayitem[6] && Arrayitem[0]!=="empty"){
    setWinmessage(`${Arrayitem[0]} wins`)
  } else{
    setCountme(countme+1)
  }

  if(Arrayitem[1]=== Arrayitem[4] && Arrayitem[1]===Arrayitem[7] && Arrayitem[1]!=="empty"){
   setWinmessage(`${Arrayitem[1]} wins`)
  }  else{
    setCountme(countme+1)
  }

  if(Arrayitem[2]=== Arrayitem[5] && Arrayitem[2]===Arrayitem[8] && Arrayitem[2]!=="empty"){
    setWinmessage(`${Arrayitem[2]} wins`)
  }  else{
    setCountme(countme+1)
  }

}

  const changeItem=(itemnumber)=>{
    if(winmessage){
    return toast(winmessage, {type:"success"})
    }
    if(Arrayitem[itemnumber]==="empty"){
      Arrayitem[itemnumber]= isCross? "cross": "circle"
      setIsCross(!isCross)
    }else{
     return toast ("already filled", {type:"error"})
    }
    if(countme===8){
      setWinmessage("DRAW BABY")
      return toast("Draw baby", {type:"warning"})
    }
    checkwinner()
    console.log(countme)
    
  }

  return (
    <Container className='p-5'>
      <ToastContainer position="bottom-center"/>
      <Row>
        <Col md={6} className="offset-md-3">
          {winmessage ? (
           <div className="mb-2 mt-2">
           <h1 className="text-success text-uppercase text-center">{winmessage}</h1>
           <Button color='success' block onClick={reload}>Reload</Button>
         </div>
          ): (
            <h1 className="text-center text-warning">{isCross?"Cross":"Circle"} turn</h1>
          )}
          
          <div className='grid'>
            {Arrayitem.map((item, index)=>{
              return (

                <Card color="warning" onClick= {()=>{changeItem(index)}}>
                  <CardBody className='box'>
                    <Icon name={item}/>

                  </CardBody>
                </Card>
              )
            })}
          </div>
        </Col>
      </Row>
    </Container>
    
  )
}

export default App;
