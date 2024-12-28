// import { useEffect, useState } from 'react';
import '../styles/NavBar.css'
// import NAVBAR from '../constant/Images';

function NavBar( props ){
	return(
		<ul className='NavBar'>
			<li ><a className='Sections' href='#'> Home</a></li>
			<li ><a className='Sections' href='#'> Projects</a></li>
			<li className='logo'><a className='Sections' href='#'>Hajar.</a></li>
			<li><a className='Sections' href='#'>About</a></li>
			<li><a className='Sections' href='#'>Contact</a></li>
				
			</ul>
		// <nav className="NavBar">
			
			/* <img 
				className="Menu"
				onClick={props.onClick}
				width="60" 
				height="60" 
				src={ props.menuState ? NAVBAR.openMenu : NAVBAR.closedMenu} 
				alt="multiply--v1"
			/> */
		// </nav>
	)
}

export default NavBar;