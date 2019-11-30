<!DOCTYPE html>
<html>
  <head>
    <style>
      html,
      body {
        overflow: hidden;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
      }

      #renderCanvas {
        width: 100%;
        height: 100%;
        touch-action: none;
      }
    </style>
    <meta http-equiv="Content-Type" content="text/html" charset="utf-8" />
    <title>Babylon - Getting Started</title>
    <!-- Link to the last version of BabylonJS -->
    <script src="https://preview.babylonjs.com/babylon.js"></script>
    <!-- Link to the last version of BabylonJS loaders to enable loading filetypes such as .gltf -->
    <script src="https://preview.babylonjs.com/loaders/babylonjs.loaders.min.js"></script>
    <!-- Link to pep.js to ensure pointer events work consistently in all browsers -->
    <script src="https://code.jquery.com/pep/0.4.1/pep.js"></script>
  </head>
  <body>
    <canvas id="renderCanvas"></canvas>
  </body>
  <script>
    window.addEventListener("DOMContentLoaded", function() {
      // All the following code is entered here.
    });</script
  >var canvas = document.getElementById('renderCanvas');var engine = new
  BABYLON.Engine(canvas, true);var createScene = function() { // Create a basic
  BJS Scene object. var scene = new BABYLON.Scene(engine); // Create a
  FreeCamera, and set its position to (x:0, y:5, z:-10). var camera = new
  BABYLON.FreeCamera('camera', new BABYLON.Vector3(0, 5,-10), scene); // Target
  the camera to scene origin. camera.setTarget(BABYLON.Vector3.Zero()); //
  Attach the camera to the canvas. camera.attachControl(canvas, false); //
  Create a basic light, aiming 0,1,0 - meaning, to the sky. var light = new
  BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,1,0), scene); //
  Create a built-in "sphere" shape. var sphere =
  BABYLON.MeshBuilder.CreateSphere('sphere', {segments:16, diameter:2}, scene);
  // Move the sphere upward 1/2 of its height. sphere.position.y = 1; // Create
  a built-in "ground" shape. var ground =
  BABYLON.MeshBuilder.CreateGround('ground1', {height:6, width:6, subdivisions:
  2}, scene); // Return the created scene. return scene; }var scene =
  createScene();engine.runRenderLoop(function() { scene.render();
  });window.addEventListener('resize', function() { engine.resize(); });var createScene = function () {

    // This creates a basic Babylon Scene object (non-mesh)
    var scene = new BABYLON.Scene(engine);

    // This creates and positions a free camera (non-mesh)
    var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);

    // This targets the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;

    // Our built-in 'sphere' shape.
    var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 2, segments: 32}, scene);

    // Move the sphere upward 1/2 its height
    sphere.position.y = 1;

    // Our built-in 'ground' shape.
    var ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 6, height: 6}, scene);

    return scene;

};
</html>
