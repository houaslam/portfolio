import NAVBAR from '../constant/Images';

function Sections(  ){
	return (
		<ul className='Sections'>
			<li>home</li>
			<li>projects</li>
			<li>about</li>
			<li>contact</li>
		</ul>
	)
}

function Menu( props ){
	return (
		<>
			<img 
				className="Menu"
				onClick={props.onClick}
				width="60" 
				height="60" 
				src={props.isOpen ? NAVBAR.openMenu : NAVBAR.closedMenu} 
				alt="multiply--v1"
				/>
			{ props.isOpen && <Sections />}
		</>
	)
}

export default Menu