import React from "react";
import { motion } from "framer-motion";

import { useInView } from 'react-intersection-observer';

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.gif";
import project3 from "../assets/project3.gif";

const Works = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const [ref2, inView2] = useInView({
        threshold: 0.7,
        triggerOnce: true,
    });

    const [ref3, inView3] = useInView({
        threshold: 0.9,
        triggerOnce: true,
    });

    const [ref4, inView4] = useInView({
        threshold: 1,
        triggerOnce: true,
    });
    
    const variants = {
        visible: {
          opacity: 1,
          y: 50,
        },
        hidden: {
          opacity: 0,
          y: 0,
        },
    };

    return(
        <div className="text-white flex flex-col max-w-3xl mx-auto">
            <div className="w-2/3 mx-auto mb-5"> 
                <h1 className="text-xl font-medium">Works</h1>
            </div>
            <motion.div className="grid sm:grid-cols-2 gap-2 w-2/3 mx-auto">
                <motion.div 
                ref={ref}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={variants}
                transition={{ duration: 0.5 }}
                className="max-w-sm col-span-2 sm:col-span-1 flex flex-col items-center gap-1 mb-5 relative top-[-50px]">
                    <a href="https://github.com/MoonCPU/IES300" target="_blank">
                        <img src={project1} alt="project1" className="w-full h-36 rounded-lg" />                        
                    </a>
                    <h1 className="border-b border-white my-1">
                        IES300    
                    </h1>       
                    <p className="px-1 text-center">A school library management system. All books are marked down, their return dates and the name and school ID of the student who borrowed them.</p>             
                </motion.div>

                <motion.div 
                ref={ref2}
                initial="hidden"
                animate={inView2 ? 'visible' : 'hidden'}
                variants={variants}
                transition={{ duration: 0.5 }}         
                className="max-w-sm col-span-2 sm:col-span-1 flex flex-col items-center gap-1 mb-5 relative top-[-50px]">
                    <a href="https://restaurant-react-seven.vercel.app/" target="_blank">
                        <img src={project2} alt="project2" className="w-full h-36 rounded-lg" />                        
                    </a>
                    <h1 className="border-b border-white my-1">
                        Ichiban Sushi  
                    </h1>       
                    <p className="px-1 text-center">A website for a fictional sushi restaurant I made.</p>             
                </motion.div>

                <motion.div 
                ref={ref3}
                initial="hidden"
                animate={inView3 ? 'visible' : 'hidden'}
                variants={variants}
                transition={{ duration: 0.5 }}  
                className="max-w-sm col-span-2 sm:col-span-1 flex flex-col items-center gap-1 mb-5 relative top-[-50px]">
                    <a href="https://pokedex-mooncpu.vercel.app/" target="_blank">
                        <img src={project3} alt="My Image" className="w-full h-36 rounded-lg" />  
                    </a>
                    <h1 className="border-b border-white my-1">
                        Pokédex    
                    </h1>       
                    <p className="px-1 text-center">A Pokédex project using the famous Pokémon API.</p>             
                </motion.div>

                <motion.div
                ref={ref4}
                initial="hidden"
                animate={inView4 ? 'visible' : 'hidden'}
                variants={variants}
                transition={{ duration: 0.5 }}  
                className="max-w-sm col-span-2 sm:col-span-1 flex flex-col items-center gap-1 relative top-[-50px]">
                    <a href="" target="_blank">
                        <img src="" alt="Coming Soon" className="w-full h-36 rounded-lg" />                        
                    </a>
                    <h1 className="border-b border-white my-1">
                        Coming Soon    
                    </h1>       
                    <p className="px-1 text-center">Full-stack project using Django for back and React for Front-End coming soon.</p>             
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Works;