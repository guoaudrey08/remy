import * as THREE from 'three'

const textureLoader = new THREE.TextureLoader()
const blue = textureLoader.load('/assets png/blue.png')
const butterfly = textureLoader.load('/assets png/butterfly.png')
const bye = textureLoader.load('/assets png/bye.png')
const cry = textureLoader.load('/assets png/cry.png')
const eye = textureLoader.load('/assets png/eye.png')
const green = textureLoader.load('/assets png/green.png')
const july = textureLoader.load('/assets png/july.png')
const lie = textureLoader.load('/assets png/lie.png')
const magpie = textureLoader.load('/assets png/magpie.png')
const night = textureLoader.load('/assets png/night.png')
const pie = textureLoader.load('/assets png/pie.png')
const sigh = textureLoader.load('/assets png/sigh.png')
const tie = textureLoader.load('/assets png/tie.png')

const bluealpha = textureLoader.load('bluealpha.png')


export function addBoilerPlateMesh() {
	const box = new THREE.BoxGeometry(0.5, 0.5, 0.5)
	const boxMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 })
	const boxMesh = new THREE.Mesh(box, boxMaterial)
	boxMesh.position.set(2, 0, 0)
	return boxMesh
}

export function addStandardMesh() {
	const box = new THREE.BoxGeometry(1, 1, 1)
	const boxMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 })
	const boxMesh = new THREE.Mesh(box, boxMaterial)
	boxMesh.position.set(-2, 0, 0)
	return boxMesh
}

export function addBlue() {
	const plane = new THREE.PlaneGeometry(1, 2)
	const planeMaterial = new THREE.MeshPhongMaterial({ map: blue, alphaTest: 0.5 })
	const planeMesh = new THREE.Mesh(plane, planeMaterial)
	planeMesh.position.set(0, 0, 0)
	return planeMesh
}

export function addButterfly() {
	const plane = new THREE.PlaneGeometry(1.5, 1.65)
	const planeMaterial = new THREE.MeshPhongMaterial({ map: butterfly, alphaTest: 0.5 })
	const planeMesh = new THREE.Mesh(plane, planeMaterial)
	planeMesh.position.set(0, 0, 0)
	return planeMesh
}

export function addBye() {
	const plane = new THREE.PlaneGeometry(2, 1)
	const planeMaterial = new THREE.MeshPhongMaterial({ map: bye, alphaTest: 0.5 })
	const planeMesh = new THREE.Mesh(plane, planeMaterial)
	planeMesh.position.set(0, 0, 0)
	return planeMesh
}

export function addCry() {
	const plane = new THREE.PlaneGeometry(2/3, 2)
	const planeMaterial = new THREE.MeshPhongMaterial({ map: cry, alphaTest: 0.5 })
	const planeMesh = new THREE.Mesh(plane, planeMaterial)
	planeMesh.position.set(0, 0, 0)
	return planeMesh
}

export function addEye() {
	const plane = new THREE.PlaneGeometry(1.5, 1)
	const planeMaterial = new THREE.MeshPhongMaterial({ map: eye, alphaTest: 0.5 })
	const planeMesh = new THREE.Mesh(plane, planeMaterial)
	planeMesh.position.set(0, 0, 0)
	return planeMesh
}

export function addGreen() {
	const plane = new THREE.PlaneGeometry(1, 2)
	const planeMaterial = new THREE.MeshPhongMaterial({ map: green, alphaTest: 0.5 })
	const planeMesh = new THREE.Mesh(plane, planeMaterial)
	planeMesh.position.set(0, 0, 0)
	return planeMesh
}

export function addJuly() {
	const plane = new THREE.PlaneGeometry(1.5, 1.65)
	const planeMaterial = new THREE.MeshPhongMaterial({ map: july, alphaTest: 0.5 })
	const planeMesh = new THREE.Mesh(plane, planeMaterial)
	planeMesh.position.set(0, 0, 0)
	return planeMesh
}

export function addLie() {
	const plane = new THREE.PlaneGeometry(1.5, 1.5)
	const planeMaterial = new THREE.MeshPhongMaterial({ map: lie, alphaTest: 0.5 })
	const planeMesh = new THREE.Mesh(plane, planeMaterial)
	planeMesh.position.set(0, 0, 0)
	return planeMesh
}

export function addMagpie() {
	const plane = new THREE.PlaneGeometry(1.5, 1.8)
	const planeMaterial = new THREE.MeshPhongMaterial({ map: magpie, alphaTest: 0.5 })
	const planeMesh = new THREE.Mesh(plane, planeMaterial)
	planeMesh.position.set(0, 0, 0)
	return planeMesh
}

export function addNight() {
	const plane = new THREE.PlaneGeometry(1.5, 1.5)
	const planeMaterial = new THREE.MeshPhongMaterial({ map: night, alphaTest: 0.5 })
	const planeMesh = new THREE.Mesh(plane, planeMaterial)
	planeMesh.position.set(0, 0, 0)
	return planeMesh
}

export function addPie() {
	const plane = new THREE.PlaneGeometry(1.8, 1.5)
	const planeMaterial = new THREE.MeshPhongMaterial({ map: pie, alphaTest: 0.5 })
	const planeMesh = new THREE.Mesh(plane, planeMaterial)
	planeMesh.position.set(0, 0, 0)
	return planeMesh
}

export function addSigh() {
	const plane = new THREE.PlaneGeometry(1.5, 1.5)
	const planeMaterial = new THREE.MeshPhongMaterial({ map: sigh, alphaTest: 0.5 })
	const planeMesh = new THREE.Mesh(plane, planeMaterial)
	planeMesh.position.set(0, 0, 0)
	return planeMesh
}

export function addTie() {
	const plane = new THREE.PlaneGeometry(1, 2)
	const planeMaterial = new THREE.MeshPhongMaterial({ map: tie, alphaTest: 0.5 })
	const planeMesh = new THREE.Mesh(plane, planeMaterial)
	planeMesh.position.set(0, 0, 0)
	return planeMesh
}