import * as THREE from 'three'

export function addLight() {
	const light = new THREE.DirectionalLight('white', 10)
	light.position.set(5*Math.cos((2*Math.PI)/13)+1, 10, 5*Math.sin((2*Math.PI)/13)+1)
	return light
}

export function addAmbientLight() {
	const light = new THREE.AmbientLight('pink', .5)
	return light
}