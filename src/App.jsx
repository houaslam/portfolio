import './styles/App.css'
import NavBar from './components/NavBar';
import Home from './components/Home';
import { useState } from 'react';
import MyThree from './components/Three';

function App() {
	return (
		<div id="App">
			<div className='fuzzyNoise'></div>
			<div className='Noise'></div>
			<NavBar/>
			<Home />
			<MyThree />
			{/* <Footer /> */}
		</div>
	);
}

export default App;
