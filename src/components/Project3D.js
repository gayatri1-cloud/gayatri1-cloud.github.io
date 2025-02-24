import React, { useRef, useEffect,useState} from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { Raycaster,Vector2 } from "three";
import { Button, Stack, Typography } from "@mui/material";

function Model({ onObjectClick }) {
  const { scene } = useGLTF("/gayatri-desk-portfolio.glb");
  const modelRef = useRef();
  const raycaster = new Raycaster();
const mouse = new Vector2()
const {camera,gl} = useThree()


const handleClick = (event) => {
  const canvasBounds = gl.domElement.getBoundingClientRect();

  // Convert screen click position to normalized device coordinates
  mouse.x = ((event.clientX - canvasBounds.left) / canvasBounds.width) * 2 - 1;
  mouse.y = -((event.clientY - canvasBounds.top) / canvasBounds.height) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObject(scene, true);

  if (intersects.length > 0) {
    const clickedObject = intersects[0].object;
    onObjectClick(clickedObject.name);
  }
};

  return <primitive ref={modelRef} object={scene} scale={1} onClick={handleClick}/>;
}

function CameraSetup() {
  const { camera, controls } = useThree();

  useEffect(() => {
    camera.position.set(0, 1, 3); // ✅ Set camera to front view
    camera.lookAt(0, 3, 0); // ✅ Ensure camera is looking straight at the model
    camera.up.set(0, 1, 0); // ✅ Fix the camera's up direction

    if (controls) {
      controls.target.set(0, 1, 0); // ✅ Make sure OrbitControls is centered on the model
      controls.update();
    }
  }, [camera, controls]);

  return null; // This component only sets up the camera
}

function Project3D({ setSelectedProject }) {
  const [toggleIntro,setToggleIntro] = useState(true)
  return (
    <Stack alignItems={'center'} sx={{
      position: 'relative',
      width: '100%',
      height: '100%'
    }}>
      {toggleIntro && <Stack spacing={2} alignItems={"center"} sx={{
        position: 'absolute',
        zIndex: 2,
        opacity: 0.8,
        backgroundColor: '#000000',
        p: '25%',
        width: '100%',
      height: '100%',
      }}
      >
        <Typography style={{
          textAlign: 'center',
          fontFamily: 'montserrat',
          fontSize:'32px',
          fontWeight: '400',
          color: '#ffffff'
        }}>
        Hi! I am Gayatri. I am a Product designer. I create memorable user experiences
        </Typography>
        <Typography style={{
          textAlign: 'center',
          fontFamily: 'Poppins',
          fontSize:'16px',
          fontWeight: '400',
          color: '#ffffff'
        }}>
        Welcome to my workstation
        </Typography>
        <Button variant="contained" sx={{
          borderRadius: '72.09px',
          border: '1.5px solid #7A87FB',
          backgroundImage: 'linear-gradient(90deg, #7A87FB 0%, #FFD49C 100%)'
        }}onClick={()=>setToggleIntro(false)}>
        <Typography style={{
          textAlign: 'center',
          fontFamily: 'Poppins',
          fontSize:'16px',
          fontWeight: '500',
          color: '#000000'
        }}>
          Tap to Start
        </Typography>
        </Button>
      </Stack>
}
    <Canvas shadows={"basic"} style={{ height: "100%", width: "100%" }} camera={{ position: [0, 2, 2]}} sx={{
      position: 'absolute',
      zIndex: 1
    }}>
      <Environment preset="night" />
      <pointLight position={[1.2,,-1,2.67]} intensity={10} castShadow/>
      <pointLight position={[1.67,,-2,3.34]} castShadow/>
      <pointLight position={[-2,,-0.7,2.43]} castShadow/>
      <spotLight position={[-0.1, -0.4, 7]} power={500} color={"#FFFFAB"} /> 
      <Model onObjectClick={setSelectedProject} />
      <CameraSetup />
      <OrbitControls  target={[0,0,0]} enableZoom={true} enablePan={true} enableRotate={true} />
    </Canvas>
    </Stack>
  );
}

export default Project3D;
