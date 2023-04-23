import React from "react";
import { useFrame, useLoader } from '@react-three/fiber';
import { useRef } from "react";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


const Model = (props) => {
    const gltf = useLoader(GLTFLoader, 'scene.gltf')
    const planetRef = useRef();

    useFrame(({ clock }) => {
        planetRef.current.rotation.y = (clock.getElapsedTime() / 2.5)
    })

    return(
        <mesh ref={planetRef} scale={[0.8, 0.8, 0.8]} position={[0.1, 1.3, 0.3]}>
            <primitive scale={[0.25, 0.25, 0.25]} object={gltf.scene} />
        </mesh>
    )
}

export default Model;