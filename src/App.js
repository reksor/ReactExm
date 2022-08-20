/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import {Routes, Route, useNavigate} from 'react-router-dom'
import { useEffect,useState } from "react"
import uniqid from 'uniqid'

import * as comicService from './services/comicsService'
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Create from './components/Create/Create';
import Edit from './components/Edit/Edit';
import CharactersList from './components/Characters/CharactersList';
import CharacterDetails from './components/CharacterDetails/CharacterDetails';

import './App.css';

function App() {
  const [characters, setComics]=useState([]);
  const navigate= useNavigate();

  const addComment=(characterId, comment)=>{
    setComics(state=>{
      const character =state.find(x=>x._id == characterId)

      const comments=character.comments || [];
      comments.push(comment)

      return [
        ...state.filter(x => x._id !== characterId),
        {...character, comments},
      ]
    })
  }

  const addCharacterHandler=(characterData)=>{
    setComics(state =>[
      ...state,
      {
        ...characterData,
        _id: uniqid(),
      },
    ]);

    navigate('/characters')
  };
  
    useEffect(()=>{
      comicService.getAll()
      .then(result=>{
        setComics(result)
      })
    },[])
  
  return (
    <div id="box">
      <Header/>
    {/* Main Content */}
    <main id="main-content"></main>
    {/*Home Page*/}
    <Routes>
      <Route path="/" element={<Home characters={characters}/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/create" element={<Create addCharacterHandler={addCharacterHandler}/>}/>
      <Route path="/characters" element={<CharactersList characters={characters}/>}/>
      <Route path="/characters/:characterId" element={<CharacterDetails characters={characters} addComment={addComment}/>}/>
    </Routes>
      
    {/* Login Page ( Only for Guest users ) */}
    
    {/* Register Page ( Only for Guest users ) */}
    
    {/* Create Page ( Only for logged-in users ) */}
    
    {/* Edit Page ( Only for the creator )*/}
    
    {/*Details Page*/}
    
    {/* Catalogue */}
   
  </div>
  );
}

export default App;
