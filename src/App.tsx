import React from 'react';
import './App.css';
import Button from './components/Button';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Input from './components/Input';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';




function App() {
 const personName = {
    firstName: "Biplob",
    lastName: "Chowdhury",
  }
  const nameList = [{
    firstName: "Tina",
    lastName: "Chowdhury",
  },
  {
    firstName: "Biplob",
    lastName: "Chowdhury",
  },
  {
    firstName: "Sakhawat",
    lastName: "Hossain",
  }
]
  return (
    <div className="App">
     <Greet name = "Sakhawat" messageCount={10} isLoggedIn={true}/>
     <Person name= {personName}/>
     <PersonList names = {nameList}/>
     <Status status='success'/>
     <Heading>PlaceHolder Text</Heading>
     <Oscar>
       <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
     </Oscar>
     <Button handleClick={(event, id) => {
       console.log("Button Clicked!", event, id);
     }}/>
     <Input value='' handleChange={(event) => console.log(event)}/>
    </div>
  );
}

export default App;
