import"./modulepreload-polyfill-B5Qt9EMX.js";const n=()=>Math.floor(Math.max(devicePixelRatio,2)),c=(t,o,e)=>{const r=t.createShader(o);return t.shaderSource(r,e),t.compileShader(r),r},l=(t,o,e)=>{const r=t.createProgram();return t.attachShader(r,e),t.attachShader(r,o),t.linkProgram(r),t.detachShader(r,e),t.detachShader(r,o),t.deleteShader(e),t.deleteShader(o),t.getProgramParameter(r,t.LINK_STATUS)||console.error(t.getProgramInfoLog(r)),r},u=(t,o)=>{t.width=t.clientWidth*n(),t.height=t.clientHeight*n();const e=t.getContext("webgl");e.clearColor(0,.5,1,1),e.clear(e.COLOR_BUFFER_BIT);const r=c(e,e.VERTEX_SHADER,`
    attribute vec2 position;
    void main() {
        gl_Position = vec4(position, 0., 1.);
    }`),s=c(e,e.FRAGMENT_SHADER,`
    precision highp float;
    uniform vec2 size;
    uniform float t;
    void main() {
        ${o}
    }`),i=l(e,r,s),d=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,d),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.useProgram(i);const h=[-1,-1,-1,1,1,1,1,1,1,-1,-1,-1];e.bufferData(e.ARRAY_BUFFER,new Float32Array(h),e.STATIC_DRAW);const m=e.getUniformLocation(i,"size"),f=e.getUniformLocation(i,"t");e.uniform2f(m,t.width,t.height);const a=A=>{e.uniform1f(f,A/1e3),e.drawArrays(e.TRIANGLES,0,6),requestAnimationFrame(a)};requestAnimationFrame(a)};u(document.getElementById("c"),`
    vec2 uv = (2. * gl_FragCoord.xy - size) / min(size.x, size.y);
    // A circle of some radius
    float sdf = length(uv) - 0.8;
    float d = abs(sdf);
    // Use the reciprocal to give a neon vibe.
    float r = 0.02 + sin(t / 2.5) * 0.007;
    float c = r / (d + 0.001);

    c = smoothstep(0.01, 0.1 - sin(t / 2.7) * 0.01, c);

    gl_FragColor = vec4(c, c, c, 1.0);
`);
