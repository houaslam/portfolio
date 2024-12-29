import { Link } from 'react-router';
import '../styles/NavBar.css'

function NavBar( props ){
	return(
		<ul className='NavBar'>

			<li ><Link className='Sections' to={"/"}> Home</Link></li>
			<li ><Link className='Sections' to={"/projects"}> Projects</Link></li>
			<li className='logo'><Link className='Sections' to={"/"}>Hajar.</Link></li>
			<li><Link className='Sections' to={"/about"}>About</Link></li>
			<li><Link className='Sections' to={"/contact"}>Contact</Link></li>
				
		</ul>
	)
}

export default NavBar;