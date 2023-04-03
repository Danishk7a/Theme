// const play = ()=>{

//     let audio = new Audio();
    
//     audio.src = "fl2.mp3";
    
    
//     audio.play();
// }


document.querySelector('button').addEventListener('click',play);

    

let scene, camera, renderer;

    function init() {
      //create scene object
      scene = new THREE.Scene();
      
      //setup camera with facing upward
      camera = new THREE.PerspectiveCamera(60,window.innerWidth / window.innerHeight, 1, 1000);
      camera.position.setZ(30);
      


      const geometry = new THREE.TorusGeometry(10,3,6,100);
      const material = new THREE.MeshStandardMaterial({color:0xff6347,wireframe:true});
      const torus = new THREE.Mesh(geometry,material);

      scene.add(torus);
      
      //setup renderer
      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);





     
      
      animate(); 
    }
   
    function animate() {
      
      requestAnimationFrame(animate);
      renderer.render(scene, camera);


    

    }



    init();

        