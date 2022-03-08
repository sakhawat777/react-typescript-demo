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
import Counter2 from './components/class/Counter2';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/generic/list';
import { RandomNumber } from './components/restriction/RandomNumber';
import { Toast } from './components/templateLiterals/Toast';
import { CustomButton } from './components/html/Button';
import { CustomComponent } from './components/html/CustomComponent';




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
     <Counter2 message=' The count value is'/>
     <Private isLoggedIn={true} component={Profile}/>
     <List items={['BatMan', 'SuperMan', 'SpiderMan']} onClick={(item) => console.log(item)}/>
     <List items={[10, 100, 1000]} onClick={(item) => console.log(item)}/>
     {/* <List items={[
      {
        id: 1,
        first: 'Lina',
        last: 'Khan',
      },
      {
        id: 2,
        first: 'Nina',
        last: 'Khan',
      },
      {
        id: 3,
        first: 'Tina',
        last: 'Khan',
      },
    ]} onClick={(item) => console.log(item)}/> */}
    <RandomNumber value={10} isPositive/>
    <Toast position='center'/>
    <CustomButton variant='primary' onClick={() => console.log('Clicked')}>Primary Button</CustomButton>
    <CustomComponent name='Neela' isLoggedIn/>
   
    </div>
    
  );
}

export default App;
