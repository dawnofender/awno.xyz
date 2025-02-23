import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Sky } from 'three/addons/objects/Sky.js';
import { MathUtils } from 'three';
import { Vector3 } from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { GlitchPass } from 'three/addons/postprocessing/GlitchPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

// Set up the scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const loader = new GLTFLoader();
const composer = new EffectComposer( renderer );

// Create skybox and sunlight simulation
const sky = new Sky();
sky.scale.setScalar(450000); // Scale it for a realistic sky dome

const phi = MathUtils.degToRad(90);  // Sun's elevation angle
const theta = MathUtils.degToRad(180);  // Sun's azimuth angle
const sunPosition = new Vector3().setFromSphericalCoords(1, phi, theta);

sky.material.uniforms.sunPosition.value = sunPosition;
scene.add(sky);

const light = new THREE.AmbientLight(0x404040, 300); // soft white light
scene.add(light);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
directionalLight.position.copy(sunPosition);
scene.add(directionalLight);

// load models
loader.load('models/cat-hat.glb', function (gltf) {
  scene.add(gltf.scene);
}, undefined, function (error) {
  console.error(error);
});

// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

camera.position.z = 1;




function animate() {
//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);