import React from 'react';
import { Route , Routes } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Board from '../features/board/Board';
import ListView from '../features/listView/ListView';
import NoteDetails from '../features/noteDetails/NoteDetails';
import AddNote from '../features/addNote/AddNote';
import { ROUTES } from '../constants/routes';
import style from './App.module.css';


function App() {

    return (
        <div className={style.app}>

            <Navbar/>
            <Routes>

                {/* Board - Grid View */}
                <Route path={ROUTES.HOME} element={ <Board/> }/>

                {/* List View */}
                <Route path={ROUTES.LIST_VIEW} element={ <ListView/> }/>

                {/* Add Note */}
                <Route path={ROUTES.ADD_NOTE} element={ <AddNote/> }/>

                {/* Note Details */}
                <Route path='/Todo-app/:id' element={ <NoteDetails/> }/>


            </Routes>

        </div>
    );
}

export default App;
