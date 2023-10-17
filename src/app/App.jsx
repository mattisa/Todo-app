import React from 'react';
import { Route , Routes } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Board from '../features/board/Board';
import NoteDetails from '../features/noteDetails/NoteDetails';
import AddNote from '../features/addNote/AddNote';
import style from './App.module.css';


function App() {

    return (
        <div className={style.app}>

            <Navbar/>
            <Routes>

                {/* Board */}
                <Route path='/todo/' element={ <Board/> }/>

                {/* Add Note */}
                <Route path='/todo/add/' element={ <AddNote/> }/>

                {/* Note Details */}
                <Route path='/todo/:id' element={ <NoteDetails/> }/>


            </Routes>

        </div>
    );
}

export default App;
