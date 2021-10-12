import * as THREE from 'three';

export const run = () => {
    var canvas = document.getElementById('webgl');

    var gl = canvas.getContext('webgl');

    const vertexShaderSource = `
    attribute vec4 position;

attribute float scale;


uniform mat4 modelViewMatrix;//
uniform mat4 projectionMatrix;//
void main() {
vec4 mvPosition = modelViewMatrix * position;

gl_PointSize = scale*1.0 * ( 200.0 / - mvPosition.z );

gl_Position = projectionMatrix * mvPosition;

}`

    var fragShaderSource = `
    void main() {
    if ( length( gl_PointCoord - vec2( 0.5, 0.5 ) ) > 0.49 ) discard;
    gl_FragColor = vec4(0.0,1.0,1.0,1.0);
}`

    var program = initShader(gl, vertexShaderSource, fragShaderSource);

    var aposLocation = gl.getAttribLocation(program, 'position');
    var scale = gl.getAttribLocation(program, 'scale');

    var modelViewMatrixLoc = gl.getUniformLocation(program, 'modelViewMatrix');
    var projectionMatrixLoc = gl.getUniformLocation(program, 'projectionMatrix');


    var SEPARATION = 100,
        AMOUNTX = 50,
        AMOUNTY = 50;
    var numParticles = AMOUNTX * AMOUNTY;

    var positions = new Float32Array(numParticles * 3);
    var scales = new Float32Array(numParticles);

    var i = 0,
        j = 0;

    for (var ix = 0; ix < AMOUNTX; ix++) {

        for (var iy = 0; iy < AMOUNTY; iy++) {

            positions[i] = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2); // x
            positions[i + 1] = 0; // y
            positions[i + 2] = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2); // z
            scales[j] = 1;
            i += 3;
            j++;

        }

    }

    var colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, scales, gl.STATIC_DRAW);
    gl.vertexAttribPointer(scale, 1, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(scale);

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
    gl.vertexAttribPointer(aposLocation, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aposLocation);

    gl.enable(gl.DEPTH_TEST);

    var width = window.innerWidth; //
    var height = window.innerHeight; //
    var camera = new THREE.PerspectiveCamera(60, width / height, 1, 10000);
    camera.position.set(200, 300, 200); //

    camera.position.set(944, 206, -262);
    camera.lookAt(new THREE.Vector3(0, 0, 0)); //()
    camera.updateProjectionMatrix()
    camera.updateMatrixWorld(true)

    var width = window.innerWidth; //
    var height = window.innerHeight; //
    var mat4 = new THREE.Matrix4();
    mat4.copy(camera.projectionMatrix)

    var mxArr = new Float32Array(mat4.elements);

    gl.uniformMatrix4fv(projectionMatrixLoc, false, mxArr);

    var mat4y = new THREE.Matrix4();

    mat4y.copy(camera.matrixWorldInverse);

    console.log(camera.matrixWorldInverse);
    var myArr = new Float32Array(mat4y.elements);

    gl.uniformMatrix4fv(modelViewMatrixLoc, false, myArr);


    var count = 0;
    var mouseX = 0,
        mouseY = 0;

    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;

    function draw() {
        camera.position.x += (mouseX - camera.position.x) * 0.01;

        camera.updateMatrixWorld(true)
        mat4y.copy(camera.matrixWorldInverse);

        var myArr = new Float32Array(mat4y.elements);
        gl.uniformMatrix4fv(modelViewMatrixLoc, false, myArr);

        var i = 0,
            j = 0;

        for (var ix = 0; ix < AMOUNTX; ix++) {
            for (var iy = 0; iy < AMOUNTY; iy++) {
                positions[i + 1] = (Math.sin((ix + count) * 0.3) * 50) +
                    (Math.sin((iy + count) * 0.5) * 50);
                scales[j] = (Math.sin((ix + count) * 0.3) + 1.3) * 8 +
                    (Math.sin((iy + count) * 0.5) + 1.3) * 8;
                i += 3;
                j++;
            }
        }
        count += 0.1;

        gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, scales, gl.STATIC_DRAW);

        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

        requestAnimationFrame(draw);

        gl.drawArrays(gl.POINTS, 0, 2500);
    }

    draw();


    function initShader(gl, vertexShaderSource, fragmentShaderSource) {
        var vertexShader = gl.createShader(gl.VERTEX_SHADER);
        var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(vertexShader, vertexShaderSource);
        gl.shaderSource(fragmentShader, fragmentShaderSource);
        gl.compileShader(vertexShader);
        gl.compileShader(fragmentShader);
        var program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        gl.useProgram(program);
        return program;
    }

    document.addEventListener('mousemove', onDocumentMouseMove, false);
    document.addEventListener('touchstart', onDocumentTouchStart, false);
    document.addEventListener('touchmove', onDocumentTouchMove, false);

    function onDocumentMouseMove(event) {

        mouseX = event.clientX - windowHalfX;
        mouseY = event.clientY - windowHalfY;

    }

    function onDocumentTouchStart(event) {

        if (event.touches.length === 1) {

            event.preventDefault();

            mouseX = event.touches[0].pageX - windowHalfX;
            mouseY = event.touches[0].pageY - windowHalfY;

        }

    }

    function onDocumentTouchMove(event) {

        if (event.touches.length === 1) {

            event.preventDefault();

            mouseX = event.touches[0].pageX - windowHalfX;
            mouseY = event.touches[0].pageY - windowHalfY;

        }

    }

    var doc1 = document.getElementById("doc1");
    var doc2 = document.getElementById("doc2");

    window.onresize = function () {
        // var canvas = document.getElementById('webgl');
        // console.log('?????????',window.innerWidth);
        // canvas.width = window.innerWidth;
        // canvas.height = window.innerHeight;
        gl.viewport(0, 0, window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        mat4.copy(camera.projectionMatrix)
        var mxArr = new Float32Array(mat4.elements);
        gl.uniformMatrix4fv(projectionMatrixLoc, false, mxArr);
        // canvas.style.width = window.innerWidth + "px";
        // canvas.style.height = window.innerHeight + "px";

        // 位置更新
        var width = window.innerWidth;
        var height = window.innerHeight;
        var mid = (width - 250) / 2 - 160 / 2 + 250;
        doc1.style.left = mid - 150 + "px";
        doc2.style.left = mid + 150 + "px";
        doc1.style.top = height / 7 + "px";
        doc2.style.top = height / 7 + "px";
    };
}
