import"./modulepreload-polyfill-B5Qt9EMX.js";const t=document.getElementById("c");t.width=t.clientWidth*devicePixelRatio;t.height=t.clientHeight*devicePixelRatio;const e=t.getContext("webgl");e.clearColor(0,.5,1,1);e.clear(e.COLOR_BUFFER_BIT);const a=e.createShader(e.VERTEX_SHADER);e.shaderSource(a,`
void main() {
    gl_Position = vec4(0., 0., 0., 1.);
    gl_PointSize = 100.;
}`);e.compileShader(a);const o=e.createShader(e.FRAGMENT_SHADER);e.shaderSource(o,`
void main() {
    gl_FragColor = vec4(1., 1., 1., 1.);
}`);e.compileShader(o);const r=e.createProgram();e.attachShader(r,a);e.attachShader(r,o);e.linkProgram(r);e.detachShader(r,a);e.detachShader(r,o);e.deleteShader(a);e.deleteShader(o);const c=e.getProgramInfoLog(r);c&&console.error(c);e.useProgram(r);e.drawArrays(e.POINTS,0,1);e.useProgram(null);e.deleteProgram(r);document.getElementById("dpr").innerText=`${devicePixelRatio}`;
