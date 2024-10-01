import React from "react"
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";


const Scene = () => {
    return (
        <mesh>
            <boxGeometry args={[1,1,1]} />
            <meshStandardMaterial color="red" />
        </mesh>
    )
}

export default function Basicstructure() {
    return(
        <div className="w-full h-screen">
            <Canvas camera={{position: [3,3,3], fov: 50}}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10,10,10]} />
                <Scene />
                <OrbitControls />
            </Canvas>
        </div>
    )
}