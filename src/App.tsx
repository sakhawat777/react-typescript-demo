import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Heading from './components/Heading';
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
    </div>
  );
}

export default App;
