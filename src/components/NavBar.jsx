import { useEffect, useState } from 'react';
import '../styles/NavBar.css'
import Menu from './Menu';
import NAVBAR from '../constant/Images';

function NavBar(  ){
	const [isMenuOpen, setIsMenuOpen] = useState(  )
	useEffect( (  )=>{
		setIsMenuOpen( false )
	}, [] )
	const handleClick = ( ) =>{
		console.log( "yay" )
		setIsMenuOpen( prev=>!prev )
	}

	return(
		<nav className="NavBar">
			<a className='logo' href='#'>HajarOuaslam</a>
			<Menu onClick={handleClick} isOpen={isMenuOpen}/>
		</nav>
	)
}

export default NavBar;