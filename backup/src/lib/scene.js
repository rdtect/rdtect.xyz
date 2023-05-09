import * as T from 'three' ;
const scene = new T.Scene();

const camera = new T.PerspectiveCamera(75, window.innerWidth /window.innerHeight, 0.1, 1000);
camera.position.z =5;

const geometry = new T.BoxGeometry();

export let material = new T.MeshStandardMaterial({
    color: 0x00ff00,
    metalness: 0.13
});

const cube = new T.Mesh(geometry, material);
scene.add(cube)

const directionalLight = new T.DirectionalLight(0x9090aa)
directionalLight.position.set(-10,-10,-10).normalize();
scene.add(directionalLight);

const hemisphericalLight = new T.HemisphereLight(0x444444);
hemisphericalLight.position.set(1,1,1);
scene.add(hemisphericalLight);

let renderer;

const animate = () =>{
    requestAnimationFrame(animate);
    cube.rotation.x +=0.01
    cube.rotation.y += 0.01;
    renderer.render(scene, camera)
};
const resize =() =>{
    renderer.setSize(window.innerWidth,window.innerHeight);
    camera.aspect = window.innerWidth /window.innerHeight;
    camera.updateProjectionMatrix();
}
export const createScene =(el)=>{
    renderer =new T.WebGL1Renderer({antialias:true, canvas:el});
    resize();
    animate();

}
window.addEventListener('resize',resize);
