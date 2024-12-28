import * as THREE from 'three';
import '../styles/Three.css'
import { OrbitControls } from 'three/examples/jsm/Addons.js';

import { useEffect, useRef } from "react";

function MyThree() {
	const refContainer = useRef(null);
	useEffect(() => {
		var scene = new THREE.Scene();
	
		var camera = new THREE.PerspectiveCamera(
			75, 
			window.innerWidth / window.innerHeight, 
			0.1,
			1000);

		var renderer = new THREE.WebGLRenderer({alpha:true});
		renderer.setClearColor( 0x000000, 0 ); 
		renderer.shadowMap.enabled = true;
		renderer.setSize(window.innerWidth, window.innerHeight);
	
		refContainer.current && refContainer.current.appendChild( renderer.domElement );

		window.addEventListener( 'resize', ()=>{
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix(  );
			renderer.setSize( window.innerWidth, window.innerHeight );
		}, false );

		const orbit = new OrbitControls( camera, renderer.domElement )
		const light = new THREE.HemisphereLight( 0x9ECE6A, 0x1A1B26 )
		scene.add( light )
	
		var geometry = new THREE.IcosahedronGeometry(1, 3);
		const wireFrame = new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: true})
		var material = new THREE.MeshStandardMaterial({ color: 0xffffff, flatShading: true });
		var cube = new THREE.Mesh(geometry, material);
		const wireMesh = new THREE.Mesh(geometry, wireFrame)
		wireMesh.scale.setScalar( 1.5 )
		scene.add(cube);
		cube.add(wireMesh);
		camera.position.z = 3;
		
		var animate = function (t = 0) {
		requestAnimationFrame(animate);
		cube.rotation.x += 0.005;
		orbit.update( )
		cube.rotation.y += 0.005;
		renderer.render(scene, camera);
		};
		animate();
	}, []);
	return (
		<div className='Three' ref={refContainer}></div>

	);
}

export default MyThree