import './style.css'
import * as THREE from 'three'
import { addBoilerPlateMesh, addStandardMesh, addBlue, addButterfly, addBye, addCry, addEye, addGreen, addJuly, addLie, addMagpie, addNight, addPie, addSigh, addTie } from './addMeshes'
import { addLight, addAmbientLight } from './addLights'
import Model from './Model'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { WheelAdaptor } from 'three-story-controls'
import gsap from 'gsap'

//globals
const meshes = {}
const lights = {}
const mixers = []
const slides = []
const ids = ["#greenspy", "#nightsky", "#fatlie", "#cherrypie", "#stripedtie", "#blackeye", "#butterfly", "#dayinjuly", "#magpie", "#deepsigh", "#byebye", "#goodcry", "#bluespy"]
const clock = new THREE.Clock()
// const controls = new OrbitControls(camera, renderer.domElement)

//pos variables
const r = 5
const xs = []
const zs = []
let ticker = 0;
for (let i=1; i<=13; i++){
	xs[i-1] = r*Math.cos((i*2*Math.PI)/13)
	zs[i-1] = r*Math.sin((i*2*Math.PI)/13)
}

//must haves
const scene = new THREE.Scene()
const textureLoader = new THREE.TextureLoader()
scene.background = textureLoader.load('/bg.jpeg')
const renderer = new THREE.WebGLRenderer({ antialias: true })
const camera = new THREE.PerspectiveCamera(
	65,
	window.innerWidth / window.innerHeight,
	0.1,
	100
)
camera.position.set(xs[0]-.45, 0, zs[0])

init()
function init() {
	renderer.setSize(window.innerWidth, window.innerHeight)
	document.body.appendChild(renderer.domElement)

	//meshes
	//"#greenspy", "#nightsky", "#fatlie", "#cherrypie", "#stripedtie", "#blackeye", "#butterfly", "#dayinjuly", "#magpie", "#deepsigh", "#byebye", "goodcry", "#bluespy
	meshes.standard = addCry()
	meshes.standard2 = addBye()
	meshes.standard3 = addSigh()
	meshes.standard4 = addMagpie()
	meshes.standard5 = addJuly()
	meshes.standard6 = addButterfly()
	meshes.standard7 = addEye()
	meshes.standard8 = addTie()
	meshes.standard9 = addPie()
	meshes.standard10 = addLie()
	meshes.standard11 = addNight()
	meshes.standard12 = addGreen()
	meshes.standard13 = addBlue()

	//lights
	lights.defaultLight = addLight()
	lights.ambientLight = addAmbientLight()

	//changes
	meshes.standard.position.set(xs[0], 0, zs[0])
	meshes.standard2.position.set(xs[1], 0, zs[1])
	meshes.standard3.position.set(xs[2], 0, zs[2])
	meshes.standard4.position.set(xs[3], 0, zs[3])
	meshes.standard5.position.set(xs[4], 0, zs[4])
	meshes.standard6.position.set(xs[5], 0, zs[5])
	meshes.standard7.position.set(xs[6], 0, zs[6])
	meshes.standard8.position.set(xs[7], 0, zs[7])
	meshes.standard9.position.set(xs[8], 0, zs[8])
	meshes.standard10.position.set(xs[9], 0, zs[9])
	meshes.standard11.position.set(xs[10], 0, zs[10])
	meshes.standard12.position.set(xs[11], 0, zs[11])
	meshes.standard13.position.set(xs[12], 0, zs[12])

	
	//scene operations
	scene.add(meshes.standard)
	scene.add(meshes.standard2)
	scene.add(meshes.standard3)
	scene.add(meshes.standard4)
	scene.add(meshes.standard5)
	scene.add(meshes.standard6)
	scene.add(meshes.standard7)
	scene.add(meshes.standard8)
	scene.add(meshes.standard9)
	scene.add(meshes.standard10)
	scene.add(meshes.standard11)
	scene.add(meshes.standard12)
	scene.add(meshes.standard13)
	
	slides.push(meshes.standard)
	slides.push(meshes.standard2)
	slides.push(meshes.standard3)
	slides.push(meshes.standard4)
	slides.push(meshes.standard5)
	slides.push(meshes.standard6)
	slides.push(meshes.standard7)
	slides.push(meshes.standard8)
	slides.push(meshes.standard9)
	slides.push(meshes.standard10)
	slides.push(meshes.standard11)
	slides.push(meshes.standard12)
	slides.push(meshes.standard13)

	scene.add(lights.defaultLight)
	scene.add(lights.ambientLight)

	gsapAnimations()
	resize()
	animate()
}

function gsapAnimations() {
	const wheelAdaptor = new WheelAdaptor({ type: 'discrete' })
	wheelAdaptor.connect()
	const text = document.querySelector(".text")

	wheelAdaptor.addEventListener('trigger', () => {
		ticker++	//tracks number of swipes

		//cubes move
		for (let i=1; i<=13; i++){
			gsap.to(slides[i-1].position, {
				x: r*Math.cos(((i+ticker)*2*Math.PI)/13),
				z: r*Math.sin(((i+ticker)*2*Math.PI)/13),
				duration: 1,
				ease: 'power2.inOut'
			})
		}
		// //current cube fades out
		// gsap.to(slides[(-ticker)%13], {
		// 	opacity: 0,
		// 	duration: 1,
		// 	ease: 'power2.inOut'
		// })

		//text fades in n out
		gsap.to(ids[(ticker-1)%13], {
			opacity: 0,
			duration: 1,

		})
		gsap.to(ids[ticker%13], {
			opacity: 1,
			duration: 1,
		})
	})
}

function resize() {
	window.addEventListener('resize', () => {
		renderer.setSize(window.innerWidth, window.innerHeight)
		camera.aspect = window.innerWidth / window.innerHeight
		camera.updateProjectionMatrix()
	})
}

function animate() {
	requestAnimationFrame(animate)
	const delta = clock.getDelta()

	//meshes.standard.rotation.x += 0.01
	//meshes.standard.rotation.z += 0.01

	// meshes.default.scale.x += 0.01

	renderer.render(scene, camera)
}