import {React, useState} from 'react'
import './App.css'

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from '@react-three/drei';

import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Model from './components/Model';
import Footer from './components/Footer';
import ContactMe from './components/ContactMe';
import Works from './components/Works';


function App() {

    return (
        <div className="App">
        <Navbar />
        <div className='flex items-center justify-center mb-6 mt-4 z-10'>
            <Canvas style={{ width: '380px', height: '320px' }}>
            <Suspense fallback={null}>
                <pointLight color="#f6f3ea" position={[10, 5, 10]} intensity={2} />
                <Model />
                <OrbitControls />
            </Suspense>
            </Canvas>          
        </div>
        <AboutMe />  
        <div className='flex items-center justify-center my-9'>
            <hr className='w-64 sm:w-96' />            
        </div>
        <Works /> 
        <div className='flex items-center justify-center my-9'>
            <hr className='w-64 sm:w-96' />            
        </div>
        <ContactMe />         
        <Footer />
        </div>
  )
}

export default App;
