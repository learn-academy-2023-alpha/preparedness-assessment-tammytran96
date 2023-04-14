import { useState } from "react"
import { Button, Input, Label } from "reactstrap"
import ModalComponent from "./components/ModalComponent"
import "./App.css"

const App = () => {

  const [input, setInput] = useState("")
  const [modal, setModal] = useState(false);

  const toggle = () => {
    if (input === ""){
      alert("Please enter a name")
    }
  else setModal(!modal)}
  
  const clearInput = () => {
    setInput("")
  }

  const handleSubmit = (e) => setInput(e.target.value)

  return (
    <div className="entire-content">
      <h1>Preparedness Assessment</h1>
      <br/><br/><br/>
      <div className="form">
        <div className="input">
          <Label for="name">Enter your name</Label>
          <div className="field">
            <Input type="text" value={input} onChange={handleSubmit}/>
          </div>
        </div>
        <ModalComponent modal={modal} toggle={toggle} input={input}/>
        <Button className="button1" onClick={toggle}>Click Me</Button>
        <Button className="button2" onClick={clearInput}>Reset</Button>
      </div>
    </div>
  )
}

export default App;
