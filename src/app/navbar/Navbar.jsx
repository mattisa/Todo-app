import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LuListTodo } from "react-icons/lu";
import { BsGrid3X3Gap } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import { ROUTES } from '../../constants/routes';
import style from './Navbar.module.css'

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();

    const isListView = location.pathname === ROUTES.LIST_VIEW;
    const isGridView = location.pathname === ROUTES.HOME || location.pathname === '/Todo-app';

    return (
        <div className={style.navbar}>
            <div className={style.logoSection}>
                <LuListTodo size="50px" color='white'/>
                <h1>ToDo App</h1>
            </div>
            <div className={style.viewToggle}>
                <button
                    className={`${style.viewButton} ${isGridView ? style.active : ''}`}
                    onClick={() => navigate(ROUTES.HOME)}
                    title="Grid View"
                >
                    <BsGrid3X3Gap size="24px" />
                </button>
                <button
                    className={`${style.viewButton} ${isListView ? style.active : ''}`}
                    onClick={() => navigate(ROUTES.LIST_VIEW)}
                    title="List View"
                >
                    <FaList size="24px" />
                </button>
            </div>
        </div>
    )
}

export default Navbar;