import './styles/App.css'
import NavBar from './components/NavBar';
import {Home, About, Projects, Contact} from './components/Main';
import { useState } from 'react';
import MyThree from './components/Three';
import { BrowserRouter, Routes, Route } from "react-router";


function App() {
	return (
		<div id="App">
			<div className='fuzzyNoise'></div>
			<div className='Noise'></div>
			<NavBar/>
			<Routes>
				<Route path='/' element={<Home />}/>
				<Route path='/projects' element={<Projects />}/>
				<Route path='/about' element={<About />}/>
				<Route path='/contact' element={<Contact />}/>
			</Routes>
			<MyThree />
		</div>
	);
}

export default App;
