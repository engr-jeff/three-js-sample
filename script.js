import * as THREE from "./three.module.min.js";
// Scene Mesh Camera Renderer

// Scene
const scene = new THREE.Scene();

// Groupings
const group = new THREE.Group();

// Mesh
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "purple" });
const mesh = new THREE.Mesh(geometry, material);

mesh.position.z = 1;

// Mesh 2
const geometryT = new THREE.BoxGeometry(1, 1, 1);
const materialT = new THREE.MeshBasicMaterial({ color: "green" });
const meshT = new THREE.Mesh(geometryT, materialT);
meshT.position.y = 2;

group.add(mesh, meshT);
group.position.x = 1;
scene.add(group);

// Axes Helper
const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);

const aspect = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const camera = new THREE.PerspectiveCamera(
  75,
  aspect.width / aspect.height,
  1,
  2000
);
camera.position.z = 4;
camera.position.x = 1;
camera.position.y = 1;
scene.add(camera);

// Renderer
const canvas = document.querySelector(".draw"); // select canvas element
const renderer = new THREE.WebGLRenderer({ canvas: canvas }); // add WebGLRenderer
renderer.setSize(aspect.width, aspect.height); // renderer size
renderer.render(scene, camera); // display what the camera in the scene captured
