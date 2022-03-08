import React from 'react';
import './App.css';
import Button from './components/Button';
import Container from './components/Container';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Input from './components/Input';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Counter from './components/state/Counter';
import LoggedIn from './components/state/LoggedIn';
import User from './components/state/User';
import Status from './components/Status';
import ThemeContextProvider from './components/context/ThemeContext';
import Box from './components/context/Box';
import { UserContextProvider} from './components/context/UserContext';
import { User2 } from './components/context/User2';
import MutableRef from './components/ref/MutableRef';
import DomRef from './components/ref/DomRef';



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
    firstName: "Mina",
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
     <Container styles={{border: '1px solid black', padding: "1rem"}}/>
     <LoggedIn/>
     <User/>
     <Counter/>
     <ThemeContextProvider>
       <Box/>
     </ThemeContextProvider>
     <UserContextProvider>
       <User2/>
     </UserContextProvider>
     <DomRef/>
     <MutableRef/>
    </div>
  );
}

export default App;
