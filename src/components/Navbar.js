import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <ul>
                {/* <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li> */}

                {/* using links for single page  */}

                {/* <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li> */}

                {/* using NavLink for adding CSS */}

                {/* <li><NavLink to='/' style={({isActive})=>{return {backgroundColor: isActive? 'red': ''}}}>Home</NavLink></li>
                <li><NavLink to='/about' style={({isActive})=>{return {backgroundColor: isActive? 'red': ''}}}>About</NavLink></li>
                <li><NavLink to='/contact' style={({isActive})=>{return {backgroundColor: isActive ? 'red': ''}}}>Contact</NavLink></li>
                <li><NavLink to='/post' style={({isActive})=>{return {backgroundColor: isActive ? 'red': ''}}}>Post</NavLink></li>
                <li><NavLink to='/login' style={({isActive})=>{return {backgroundColor: isActive ? 'red': ''}}}>Login</NavLink></li>
                <li><NavLink to='/dashboard' style={({isActive})=>{return {backgroundColor: isActive ? 'red': ''}}}>Dashboard</NavLink></li> */}
                <li><NavLink to='/lobby' style={({isActive})=>{return {backgroundColor: isActive ? 'red': ''}}}>Lobby</NavLink></li>
                <li><NavLink to='/join-lobby' style={({isActive})=>{return {backgroundColor: isActive ? 'red': ''}}}>Join Lobby</NavLink></li>
                <li><NavLink to='/start' style={({isActive})=>{return {backgroundColor: isActive ? 'red': ''}}}>Start Game</NavLink></li>
                <li><NavLink to='/display-page' style={({isActive})=>{return {backgroundColor: isActive ? 'red': ''}}}>Display Qs</NavLink></li>
                <li><NavLink to='/result-page' style={({isActive})=>{return {backgroundColor: isActive ? 'red': ''}}}>Performance Report</NavLink></li>
                <li><NavLink to='/selection-page' style={({isActive})=>{return {backgroundColor: isActive ? 'red': ''}}}>Selection</NavLink></li>
            </ul>
        </>
    )
}
