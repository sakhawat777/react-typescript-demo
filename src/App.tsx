import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';




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
     <Greet name = "Sakhawat" messageCount={10} isLoggedIn={false}/>
     <Person name= {personName}/>
     <PersonList names = {nameList}/>
    </div>
  );
}

export default App;
