import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
 const dictionary = [

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

 ] ;

 const [word,setWord] = useState("");

 const [meaning,setMeaning] = useState("");

 const handleChange = (e) => {
  setWord(e.target.value)
 };

 const handleClick = () => {
  const result = dictionary.find((item)=> item.word.toLowerCase() === word.toLowerCase());

  if(result){
    setMeaning(result.meaning);
  }else{
    setMeaning('Word not found in the dictionary.');
  }
 }

 console.log(word);

  return (
    <div>
      <h1>Dictionary App</h1>
      <input type="text" placeholder='Search for a word' onChange={handleChange}/>
      <button onClick={handleClick}>Search</button>
      <div>
        <h3>Definition:</h3>
        <p>{meaning}</p>
      </div>
    </div>
     )
}

export default App
