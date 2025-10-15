import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { addNote , deleteNote } from './boardSlice';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import style from './Board.module.css';
import Card from '../components/card/Card';
import AddCard from '../components/addCard/AddCard';

function Board() {

    const navigate = useNavigate();
    const notes = useSelector((state) => state.board.notes);

    return (
        <div className={style.board}>
            {
                notes.map((note,idx) => {
                    if(note.id !== 0){
                        return <div className={style.card} key={note.id} onClick={() => navigate(ROUTES.NOTE_DETAILS(idx))}>
                            <Card
                                title={note?.title}
                                description={note?.desc}
                            />
                        </div>
                    }
                    return <div className={style.card} key={note.id} onClick={() => navigate(ROUTES.ADD_NOTE)}>
                        <AddCard/>
                    </div>
                })
            }
        </div>
    );
}

export default Board;