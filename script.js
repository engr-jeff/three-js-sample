import * as THREE from "./three.module.min.js";
// Scene Mesh Camera Renderer

// Scene
const scene = new THREE.Scene();

// Mesh - OLD
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: "purple" });
// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);

// Mesh - NEW
const geometry = new THREE.BoxBufferGeometry();
// const geometry = new THREE.BufferGeometry();
// const verticesArray = new Float32Array([0, 0, 0, 0, 1, 0, 1, 0, 0]);

// // separate the 3 values and convert to attributes
// const positionsAttribute = new THREE.BufferAttribute(verticesArray, 3);
// geometry.setAttribute("position", positionsAttribute);
// console.log(geometry);

const material = new THREE.MeshBasicMaterial({
  color: "purple",
  wireframe: true,
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Camera
const aspect = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height);

camera.position.z = 3;
scene.add(camera);

// Renderer
const canvas = document.querySelector(".draw"); // Select the canvas
const renderer = new THREE.WebGLRenderer({ canvas: canvas }); // Add WebGL renderer
renderer.setSize(aspect.width, aspect.height); // Renderer size

// Clock class - used for making animations the same in all devices (with different fps)
const clock = new THREE.Clock();

const animate = () => {
  // Get elapsed time
  const elapsedTime = clock.getElapsedTime();
  // Update rotation on x-axis
  mesh.rotation.y = elapsedTime * Math.PI;

  renderer.render(scene, camera); // draw what the camera captured
  window.requestAnimationFrame(animate);
};
animate();
// function will get called depending on the fps (frames per second) of the device
