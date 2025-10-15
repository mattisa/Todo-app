import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteNote } from '../board/boardSlice';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import style from './ListView.module.css';
import { MdDelete } from 'react-icons/md';

function ListView() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const notes = useSelector((state) => state.board.notes);

    const handleDelete = (noteId, e) => {
        e.stopPropagation();
        dispatch(deleteNote(noteId));
    };

    const filteredNotes = notes.filter(note => note.id !== 0);

    return (
        <div className={style.listViewContainer}>
            <div className={style.header}>
                <h2>All Tasks</h2>
                <button
                    className={style.addButton}
                    onClick={() => navigate(ROUTES.ADD_NOTE)}
                >
                    + Add New Task
                </button>
            </div>

            {filteredNotes.length === 0 ? (
                <div className={style.emptyState}>
                    <p>No tasks yet. Create your first task!</p>
                </div>
            ) : (
                <div className={style.listView}>
                    {filteredNotes.map((note, idx) => (
                        <div
                            key={note.id}
                            className={style.listItem}
                            onClick={() => navigate(ROUTES.NOTE_DETAILS(idx + 1))}
                        >
                            <div className={style.taskContent}>
                                <h3 className={style.taskTitle}>{note.title}</h3>
                                <p className={style.taskDescription}>{note.desc}</p>
                            </div>
                            <button
                                className={style.deleteButton}
                                onClick={(e) => handleDelete(note.id, e)}
                                aria-label="Delete task"
                            >
                                <MdDelete />
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ListView;
