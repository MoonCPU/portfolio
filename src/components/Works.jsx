import React from "react";
import { motion } from "framer-motion";

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.gif";
import project3 from "../assets/project3.gif";

const Works = () => {

    const container = {
        hidden: { scale: 0 },
        show: {
            scale: 1,
            transition: {
                staggerChildren: 0.3,
                ease: "easeInOut",
                duration: 0.7
            }
        }
    }

    const item = {
        hidden: { scale: 0 },
        show: { scale: 1 },
    }

    return(
        <div className="text-white flex flex-col max-w-3xl mx-auto mb-5">
            <div className="w-2/3 mx-auto mb-5"> 
                <h1 className="text-xl font-medium">Works</h1>
            </div>
            <motion.div className="grid sm:grid-cols-2 gap-2 w-2/3 mx-auto" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <motion.div className="max-w-sm col-span-2 sm:col-span-1 flex flex-col items-center gap-1 mb-5" variants={item}>
                    <a href="https://github.com/MoonCPU/IES300" target="_blank">
                        <img src={project1} alt="project1" className="w-full h-36 rounded-lg" />                        
                    </a>
                    <h1 className="border-b border-white my-1">
                        IES300    
                    </h1>       
                    <p className="px-1 text-center">A school library management system. All books are marked down, their return dates and the name and school ID of the student who borrowed them.</p>             
                </motion.div>

                <motion.div className="max-w-sm col-span-2 sm:col-span-1 flex flex-col items-center gap-1 mb-5" variants={item}>
                    <a href="https://restaurant-react-seven.vercel.app/" target="_blank">
                        <img src={project2} alt="project2" className="w-full h-36 rounded-lg" />                        
                    </a>
                    <h1 className="border-b border-white my-1">
                        Ichiban Sushi  
                    </h1>       
                    <p className="px-1 text-center">A website for a fictional sushi restaurant I made.</p>             
                </motion.div>

                <motion.div className="max-w-sm col-span-2 sm:col-span-1 flex flex-col items-center gap-1 mb-5" variants={item}>
                    <a href="https://pokedex-mooncpu.vercel.app/" target="_blank">
                        <img src={project3} alt="My Image" className="w-full h-36 rounded-lg" />  
                    </a>
                    <h1 className="border-b border-white my-1">
                        Pokédex    
                    </h1>       
                    <p className="px-1 text-center">A Pokédex project using the famous Pokémon API.</p>             
                </motion.div>

                <motion.div className="max-w-sm col-span-2 sm:col-span-1 flex flex-col items-center gap-1" variants={item}>
                    <a href="" target="_blank">
                        <img src={project1} alt="My Image" className="w-full h-36 rounded-lg" />                        
                    </a>
                    <h1 className="border-b border-white my-1">
                        Site 3    
                    </h1>       
                    <p className="px-1 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor accusantium reiciendis commodi praesentium omnis vero!</p>             
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Works;