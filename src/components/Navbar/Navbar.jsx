import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <div className={s.item}><NavLink activeClassName={s.activeLink} to="/profile">profile</NavLink></div>
            <div className={s.item}><NavLink activeClassName={s.activeLink} to="/dialogs">messages</NavLink></div>
            <div className={s.item}><NavLink activeClassName={s.activeLink} to="/users">users</NavLink></div>
            <div className={s.item}><NavLink activeClassName={s.activeLink} to="/news">news</NavLink></div>
            <div className={s.item}><NavLink activeClassName={s.activeLink} to="/music">music</NavLink></div>
            <div className={s.item}><NavLink activeClassName={s.activeLink} to="/settings">settings</NavLink></div>
        </nav>
    );
}

export default Navbar;