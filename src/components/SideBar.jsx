import NAVBAR from "../constant/Images"
import '../styles/SideBare.css'

function SideBar( props ){
    return (
        <div className="sideBar">
            <img 
				className="Menu"
				onClick={props.onClick}
				src={NAVBAR.openMenu} 
				alt="multiply--v1"
				/>
            <ul className='Sections'>
                <li>home</li>
                <li>projects</li>
                <li>about</li>
                <li>contact</li>
            </ul>
        </div>
    )
}

export default SideBar