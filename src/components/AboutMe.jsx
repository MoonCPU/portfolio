import React from "react";
import myImage from '../assets/aboutMe.png';

import {AiFillHeart} from "react-icons/ai";

const AboutMe = () => {

    return(
        <div className="text-white flex flex-col max-w-2xl mx-auto">
            <div className="w-2/3 mx-auto"> 
                <div className="bg-gray-600 mx-auto p-4 text-center rounded-lg mb-4">
                    <h1>Hello, I'm a Front-End developer based in Brazil!</h1>
                </div>
                <div className="flex flex-col justify-between sm:flex-row mb-4">
                    <div className="my-auto mx-auto sm:mx-0">
                        <h1 className="text-lg sm:text-2xl font-medium text-center sm:text-left">&lt;Moon Hyuk Kang /&gt;</h1>
                        <h2 className="text-sm mb-1 sm:my-0 text-center">developer / designer / aspiring artist</h2>                         
                    </div>
                    <div className="mx-auto sm:mx-0 mt-3 mb-1 sm:my-0">
                        <img src={myImage} alt="My Image" className="object-contain h-28 w-28 rounded-full border-2 border-white" />
                    </div>
                </div>
                <div className="text-xl my-1 font-medium">
                    <h1>About me</h1>    
                </div>            
                <div>
                    <p className="indent-4">I am a DevOps engineer and application developer, currently working at IBM. I am very interested in software development, and I am committed to continually learn and grow as a Front-End developer.</p>    
                </div>    
                <div id="bio" className="mt-6">
                    <div className="text-xl mb-2 font-medium flex flex-col">Bio</div>
                    <div className="flex flex-row mb-1">
                        <h1>2000</h1>
                        <p className="pl-4">Born in Asunción, Paraguay.</p>
                    </div>
                    <div className="flex flex-row mb-1">
                        <h1>2001</h1>
                        <p className="pl-4">Moved to São Paulo, Brazil.</p>
                    </div>
                    <div className="flex flex-row mb-1">
                        <h1>2021</h1>
                        <p className="pl-4">My first professional experience in IT as an intern at IBM.</p>
                    </div>
                    <div className="flex flex-row">
                        <h1>2022</h1>
                        <p className="pl-4">Completed my Associate Degree in Systems Analysis and Development at FATEC (Faculdade de Tecnologia de São Paulo)</p>
                    </div>
                </div>
                <div id="iLove">
                    <div className="mt-6 text-xl mb-1 flex flex-row items-end">
                        <h1 className="font-medium pr-2">I
                        </h1>
                        <AiFillHeart className="text-red-500 text-2xl hover:text-red-700 duration-500 ease-in-out" />                            
                    </div>
                    <hr className="text-white mb-2 w-10" />
                    <div>
                        <h1 className="indent-4">Movies, Books by Rick Riordan, Gaming and Drawing while listening to Podcasts.</h1>
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default AboutMe;